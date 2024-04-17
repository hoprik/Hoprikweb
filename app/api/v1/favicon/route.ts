import fetch from 'node-fetch';
import sharp from 'sharp';

function base64ToBytes(base64: string) {
    const binString = atob(base64);
    // @ts-ignore
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

export async function GET() {
    const size = 4
    const options = {
        method: 'GET',
        headers: {
            'User-Agent': 'insomnia/8.6.1',
            cache: 'no-store'
        }
    };
    // Получаем изображение
    const response = await fetch('https://sessionserver.mojang.com/session/minecraft/profile/0d74e5a402ed40e08c4a1124dd72aaea', options);
    const json: unknown = await response.json();
    // @ts-ignore
    const url = JSON.parse(new TextDecoder().decode(base64ToBytes(json["properties"][0]["value"])))["textures"]["SKIN"]["url"];

    const responseImage = await fetch(url, options);
    const buffer = await responseImage.arrayBuffer();

    const layer2 = await sharp(Buffer.from(buffer))
        .extract({ width: 8, height: 8, left: 40, top: 8  })
        .resize(8*size, 8*size,{
            kernel: sharp.kernel.nearest
        })
        .toBuffer(); // возвращаем Buffer

    // Редактируем изображение с помощью sharp
    const editedImage = await sharp(Buffer.from(buffer))
        .extract({ width: 8, height: 8, left: 8, top: 8  })
        .composite([
            {
                input: layer2
            }
        ])
        .resize(8*size, 8*size  ,{
            kernel: sharp.kernel.nearest
        })
        .toBuffer(); // возвращаем Buffer


    // Возвращаем изображение
    return new Response(editedImage, {
        status: 200,
        headers: {'Content-Type': 'image/jpeg' },
    })
}