import storyJson from "../../../public/story.json"

export async function POST(request: Request, {params}: {params: {random: number, randomElem: number}}) {
    console.log(request.json())
    const json = JSON.parse(JSON.stringify(storyJson))
    const reqJson = JSON.parse(JSON.stringify(await request.json()))
    const randomStoryType = reqJson["random"]
    const randomElem = reqJson["randomElem"]
    let story = ""
    if (randomStoryType < 60) {
        story = json["normal"][randomElem]
    }
    else if (randomStoryType > 60 && randomStoryType < 90){
        story = json["funny"][randomElem]
    }
    else{
        story = json["pizec"][randomElem]
    }
    return Response.json({answer:story})
}