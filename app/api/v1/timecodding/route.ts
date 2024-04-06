function declOfNum(n: number, text_forms: [String, String, String]) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}

export async function GET() {
    const options = {
        method: 'GET',
        headers: {
            'User-Agent': 'insomnia/8.6.1',
            Authorization: `Basic ${process.env.WAKATIME_API}`
        }
    };
    // "860 hrs 24 mins
    const res: Response = await fetch('https://wakatime.com/api/v1/users/hoprik/all_time_since_today', options)
    const data = await res.json()
    const timeSplit = data["data"]["text"].split("hrs")
    const hourInt = Number(timeSplit[0])
    const minutesInt = Number(timeSplit[1].split("mins")[0])
    const hour = String(hourInt)+" "+declOfNum(hourInt, ["час", 'часа', 'часов']);
    const minutes = String(minutesInt)+" "+declOfNum(minutesInt, ['минута', 'минуты', 'минут']);
    const time = hour+" и "+minutes

    return Response.json({time})
}