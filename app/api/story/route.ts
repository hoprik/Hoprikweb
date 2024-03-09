import storyJson from "../../../public/story.json"
function random(max: number) {
    return Math.floor(Math.random() * max)
}
export async function GET() {
    const json = JSON.parse(JSON.stringify(storyJson))
    const randomStoryType = random(100)
    console.log(randomStoryType)
    let story = ""
    if (randomStoryType < 90) {
        story = json["normal"][random(json["normal"].length)]
    }
    else if (randomStoryType > 90 && randomStoryType < 96){
        story = json["funny"][random(json["funny"].length)]
    }
    else{
        story = json["pizec"][random(json["pizec"].length)]
    }
    return Response.json({answer:story})
}