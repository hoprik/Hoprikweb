import * as icons from "devicons-react"
import {SocialIcon} from "react-social-icons";

function Icon(props) {
    const {nameIcon="google", size = 50} = props;
    let name = nameIcon.toLowerCase().replaceAll("[^A-Za-zА-Яа-я0-9]", "");
    if (!name.includes("original") && !name.includes("plain")) name += "original"
    switch (name) {
        case "discordjsoriginalwordmark":
            return <icons.DiscordjsOriginalWordmark size={size}/>
        case "discordjsoriginal":
            return <icons.DiscordjsOriginal size={size}/>
        case "discordjsplainwordmark":
            return <icons.DiscordjsPlainWordmark size={size}/>
        case "discordjsplain":
            return <icons.DiscordjsPlain size={size}/>
        case "djangoplainwordmark":
            return <icons.DjangoPlainWordmark size={size}/>
        case "djangoplain":
            return <icons.DjangoPlain size={size}/>
        case "astroplain":
            return <icons.AstroPlain size={size}/>
        case "quasarplainwordmark":
            return <icons.QuasarPlainWordmark size={size}/>
        case "quasarplain":
            return <icons.QuasarPlain size={size}/>
        case "qwikoriginalwordmark":
            return <icons.QwikOriginalWordmark size={size}/>
        case "qwikoriginal":
            return <icons.QwikOriginal size={size}/>
        case "qwikplainwordmark":
            return <icons.QwikPlainWordmark size={size}/>
        case "qwikplain":
            return <icons.QwikPlain size={size}/>
        case "rline":
            return <icons.RLine size={size}/>
        case "roriginal":
            return <icons.ROriginal size={size}/>
        case "rplain":
            return <icons.RPlain size={size}/>
        case "rabbitmqoriginalwordmark":
            return <icons.RabbitmqOriginalWordmark size={size}/>
        case "rabbitmqoriginal":
            return <icons.RabbitmqOriginal size={size}/>
        case "rabbitmqplainwordmark":
            return <icons.RabbitmqPlainWordmark size={size}/>
        case "railsoriginalwordmark":
            return <icons.RailsOriginalWordmark size={size}/>
        case "railsplainwordmark":
            return <icons.RailsPlainWordmark size={size}/>
        case "railsplain":
            return <icons.RailsPlain size={size}/>
        case "railwaylinewordmark":
            return <icons.RailwayLineWordmark size={size}/>
        case "railwayline":
            return <icons.RailwayLine size={size}/>
        case "railwayoriginalwordmark":
            return <icons.RailwayOriginalWordmark size={size}/>
        case "railwayoriginal":
            return <icons.RailwayOriginal size={size}/>
        case "rancherlinewordmark":
            return <icons.RancherLineWordmark size={size}/>
        case "rancherline":
            return <icons.RancherLine size={size}/>
        case "rancheroriginalwordmark":
            return <icons.RancherOriginalWordmark size={size}/>
        case "rancheroriginal":
            return <icons.RancherOriginal size={size}/>
        case "rancherplainwordmark":
            return <icons.RancherPlainWordmark size={size}/>
        case "raspberrypilinewordmark":
            return <icons.RaspberrypiLineWordmark size={size}/>
        case "raspberrypiline":
            return <icons.RaspberrypiLine size={size}/>
        case "raspberrypioriginalwordmark":
            return <icons.RaspberrypiOriginalWordmark size={size}/>
        case "raspberrypioriginal":
            return <icons.RaspberrypiOriginal size={size}/>
        case "raspberrypiplainwordmark":
            return <icons.RaspberrypiPlainWordmark size={size}/>
        case "raspberrypiplain":
            return <icons.RaspberrypiPlain size={size}/>
        case "axiosplain":
            return <icons.AxiosPlain size={size}/>
        case "azureoriginalwordmark":
            return <icons.AzureOriginalWordmark size={size}/>
        case "azureoriginal":
            return <icons.AzureOriginal size={size}/>
        case "azureplainwordmark":
            return <icons.AzurePlainWordmark size={size}/>
        case "azureplain":
            return <icons.AzurePlain size={size}/>
        case "azuredevopsoriginal":
            return <icons.AzuredevopsOriginal size={size}/>
        case "azuredevopsplain":
            return <icons.AzuredevopsPlain size={size}/>
        case "azuresqldatabaseoriginal":
            return <icons.AzuresqldatabaseOriginal size={size}/>
        case "azuresqldatabaseplain":
            return <icons.AzuresqldatabasePlain size={size}/>
        case "babeloriginal":
            return <icons.BabelOriginal size={size}/>
        case "babelplain":
            return <icons.BabelPlain size={size}/>
        case "backbonejsoriginalwordmark":
            return <icons.BackbonejsOriginalWordmark size={size}/>
        case "backbonejsoriginal":
            return <icons.BackbonejsOriginal size={size}/>
        case "backbonejsplainwordmark":
            return <icons.BackbonejsPlainWordmark size={size}/>
        case "backbonejsplain":
            return <icons.BackbonejsPlain size={size}/>
        case "ballerinalinewordmark":
            return <icons.BallerinaLineWordmark size={size}/>
        case "ballerinaline":
            return <icons.BallerinaLine size={size}/>
        case "ballerinaoriginalwordmark":
            return <icons.BallerinaOriginalWordmark size={size}/>
        case "ballerinaoriginal":
            return <icons.BallerinaOriginal size={size}/>
        case "bamboooriginalwordmark":
            return <icons.BambooOriginalWordmark size={size}/>
        case "bamboooriginal":
            return <icons.BambooOriginal size={size}/>
        case "bashoriginal":
            return <icons.BashOriginal size={size}/>
        case "bashplain":
            return <icons.BashPlain size={size}/>
        case "beatsoriginal":
            return <icons.BeatsOriginal size={size}/>
        case "beatsplain":
            return <icons.BeatsPlain size={size}/>
        case "behanceoriginalwordmark":
            return <icons.BehanceOriginalWordmark size={size}/>
        case "behanceoriginal":
            return <icons.BehanceOriginal size={size}/>
        case "behanceplainwordmark":
            return <icons.BehancePlainWordmark size={size}/>
        case "behanceplain":
            return <icons.BehancePlain size={size}/>
        case "axiosplainwordmark":
            return <icons.AxiosPlainWordmark size={size}/>
        case "bitbucketoriginal":
            return <icons.BitbucketOriginal size={size}/>
        case "blazorline":
            return <icons.BlazorLine size={size}/>
        case "blazororiginal":
            return <icons.BlazorOriginal size={size}/>
        case "blenderoriginalwordmark":
            return <icons.BlenderOriginalWordmark size={size}/>
        case "blenderoriginal":
            return <icons.BlenderOriginal size={size}/>
        case "bootstraporiginalwordmark":
            return <icons.BootstrapOriginalWordmark size={size}/>
        case "bootstraporiginal":
            return <icons.BootstrapOriginal size={size}/>
        case "bootstrapplainwordmark":
            return <icons.BootstrapPlainWordmark size={size}/>
        case "bootstrapplain":
            return <icons.BootstrapPlain size={size}/>
        case "bowerlinewordmark":
            return <icons.BowerLineWordmark size={size}/>
        case "bowerline":
            return <icons.BowerLine size={size}/>
        case "boweroriginalwordmark":
            return <icons.BowerOriginalWordmark size={size}/>
        case "boweroriginal":
            return <icons.BowerOriginal size={size}/>
        case "bowerplainwordmark":
            return <icons.BowerPlainWordmark size={size}/>
        case "bowerplain":
            return <icons.BowerPlain size={size}/>
        case "browserstacklinewordmark":
            return <icons.BrowserstackLineWordmark size={size}/>
        case "browserstackline":
            return <icons.BrowserstackLine size={size}/>
        case "browserstackoriginalwordmark":
            return <icons.BrowserstackOriginalWordmark size={size}/>
        case "browserstackoriginal":
            return <icons.BrowserstackOriginal size={size}/>
        case "browserstackplainwordmark":
            return <icons.BrowserstackPlainWordmark size={size}/>
        case "browserstackplain":
            return <icons.BrowserstackPlain size={size}/>
        case "bulmaplain":
            return <icons.BulmaPlain size={size}/>
        case "bunline":
            return <icons.BunLine size={size}/>
        case "bunoriginal":
            return <icons.BunOriginal size={size}/>
        case "bunplain":
            return <icons.BunPlain size={size}/>
        case "cline":
            return <icons.CLine size={size}/>
        case "coriginal":
            return <icons.COriginal size={size}/>
        case "cplain":
            return <icons.CPlain size={size}/>
        case "cairooriginalwordmark":
            return <icons.CairoOriginalWordmark size={size}/>
        case "cairooriginal":
            return <icons.CairoOriginal size={size}/>
        case "cairoplainwordmark":
            return <icons.CairoPlainWordmark size={size}/>
        case "cairoplain":
            return <icons.CairoPlain size={size}/>
        case "cakephporiginalwordmark":
            return <icons.CakephpOriginalWordmark size={size}/>
        case "cakephporiginal":
            return <icons.CakephpOriginal size={size}/>
        case "cakephpplainwordmark":
            return <icons.CakephpPlainWordmark size={size}/>
        case "cakephpplain":
            return <icons.CakephpPlain size={size}/>
        case "canvaoriginal":
            return <icons.CanvaOriginal size={size}/>
        case "capacitororiginalwordmark":
            return <icons.CapacitorOriginalWordmark size={size}/>
        case "capacitororiginal":
            return <icons.CapacitorOriginal size={size}/>
        case "capacitorplainwordmark":
            return <icons.CapacitorPlainWordmark size={size}/>
        case "capacitorplain":
            return <icons.CapacitorPlain size={size}/>
        case "carbonoriginal":
            return <icons.CarbonOriginal size={size}/>
        case "cassandraoriginalwordmark":
            return <icons.CassandraOriginalWordmark size={size}/>
        case "cassandraoriginal":
            return <icons.CassandraOriginal size={size}/>
        case "cassandraplainwordmark":
            return <icons.CassandraPlainWordmark size={size}/>
        case "cassandraplain":
            return <icons.CassandraPlain size={size}/>
        case "centosoriginalwordmark":
            return <icons.CentosOriginalWordmark size={size}/>
        case "centosoriginal":
            return <icons.CentosOriginal size={size}/>
        case "centosplainwordmark":
            return <icons.CentosPlainWordmark size={size}/>
        case "centosplain":
            return <icons.CentosPlain size={size}/>
        case "ceylonoriginalwordmark":
            return <icons.CeylonOriginalWordmark size={size}/>
        case "ceylonoriginal":
            return <icons.CeylonOriginal size={size}/>
        case "ceylonplainwordmark":
            return <icons.CeylonPlainWordmark size={size}/>
        case "ceylonplain":
            return <icons.CeylonPlain size={size}/>
        case "chromeoriginalwordmark":
            return <icons.ChromeOriginalWordmark size={size}/>
        case "chromeoriginal":
            return <icons.ChromeOriginal size={size}/>
        case "chromeplainwordmark":
            return <icons.ChromePlainWordmark size={size}/>
        case "chromeplain":
            return <icons.ChromePlain size={size}/>
        case "circleciplainwordmark":
            return <icons.CircleciPlainWordmark size={size}/>
        case "circleciplain":
            return <icons.CircleciPlain size={size}/>
        case "clarityoriginalwordmark":
            return <icons.ClarityOriginalWordmark size={size}/>
        case "clarityoriginal":
            return <icons.ClarityOriginal size={size}/>
        case "clarityplainwordmark":
            return <icons.ClarityPlainWordmark size={size}/>
        case "clarityplain":
            return <icons.ClarityPlain size={size}/>
        case "clionoriginalwordmark":
            return <icons.ClionOriginalWordmark size={size}/>
        case "clionoriginal":
            return <icons.ClionOriginal size={size}/>
        case "clionplainwordmark":
            return <icons.ClionPlainWordmark size={size}/>
        case "clionplain":
            return <icons.ClionPlain size={size}/>
        case "clojureline":
            return <icons.ClojureLine size={size}/>
        case "clojureoriginal":
            return <icons.ClojureOriginal size={size}/>
        case "clojurescriptoriginal":
            return <icons.ClojurescriptOriginal size={size}/>
        case "clojurescriptplain":
            return <icons.ClojurescriptPlain size={size}/>
        case "cloudflareoriginalwordmark":
            return <icons.CloudflareOriginalWordmark size={size}/>
        case "cloudflareoriginal":
            return <icons.CloudflareOriginal size={size}/>
        case "cloudflareplainwordmark":
            return <icons.CloudflarePlainWordmark size={size}/>
        case "cloudflareplain":
            return <icons.CloudflarePlain size={size}/>
        case "cloudflareworkersoriginalwordmark":
            return <icons.CloudflareworkersOriginalWordmark size={size}/>
        case "awkoriginalwordmark":
            return <icons.AwkOriginalWordmark size={size}/>
        case "cloudflareworkersplainwordmark":
            return <icons.CloudflareworkersPlainWordmark size={size}/>
        case "cloudflareworkersplain":
            return <icons.CloudflareworkersPlain size={size}/>
        case "cmakeoriginalwordmark":
            return <icons.CmakeOriginalWordmark size={size}/>
        case "cmakeoriginal":
            return <icons.CmakeOriginal size={size}/>
        case "cmakeplainwordmark":
            return <icons.CmakePlainWordmark size={size}/>
        case "cmakeplain":
            return <icons.CmakePlain size={size}/>
        case "codeacoriginal":
            return <icons.CodeacOriginal size={size}/>
        case "codecovplain":
            return <icons.CodecovPlain size={size}/>
        case "codeigniterplainwordmark":
            return <icons.CodeigniterPlainWordmark size={size}/>
        case "codeigniterplain":
            return <icons.CodeigniterPlain size={size}/>
        case "codepenlinewordmark":
            return <icons.CodepenLineWordmark size={size}/>
        case "codepenline":
            return <icons.CodepenLine size={size}/>
        case "codepenoriginalwordmark":
            return <icons.CodepenOriginalWordmark size={size}/>
        case "codepenoriginal":
            return <icons.CodepenOriginal size={size}/>
        case "coffeescriptoriginalwordmark":
            return <icons.CoffeescriptOriginalWordmark size={size}/>
        case "coffeescriptoriginal":
            return <icons.CoffeescriptOriginal size={size}/>
        case "composerlinewordmark":
            return <icons.ComposerLineWordmark size={size}/>
        case "composerline":
            return <icons.ComposerLine size={size}/>
        case "composeroriginal":
            return <icons.ComposerOriginal size={size}/>
        case "confluencelinewordmark":
            return <icons.ConfluenceLineWordmark size={size}/>
        case "confluenceline":
            return <icons.ConfluenceLine size={size}/>
        case "confluenceoriginalwordmark":
            return <icons.ConfluenceOriginalWordmark size={size}/>
        case "confluenceoriginal":
            return <icons.ConfluenceOriginal size={size}/>
        case "confluenceplainwordmark":
            return <icons.ConfluencePlainWordmark size={size}/>
        case "confluenceplain":
            return <icons.ConfluencePlain size={size}/>
        case "consuloriginalwordmark":
            return <icons.ConsulOriginalWordmark size={size}/>
        case "consuloriginal":
            return <icons.ConsulOriginal size={size}/>
        case "consulplainwordmark":
            return <icons.ConsulPlainWordmark size={size}/>
        case "contaooriginalwordmark":
            return <icons.ContaoOriginalWordmark size={size}/>
        case "contaooriginal":
            return <icons.ContaoOriginal size={size}/>
        case "corejsoriginalwordmark":
            return <icons.CorejsOriginalWordmark size={size}/>
        case "corejsoriginal":
            return <icons.CorejsOriginal size={size}/>
        case "cosmosdboriginalwordmark":
            return <icons.CosmosdbOriginalWordmark size={size}/>
        case "cosmosdboriginal":
            return <icons.CosmosdbOriginal size={size}/>
        case "cosmosdbplainwordmark":
            return <icons.CosmosdbPlainWordmark size={size}/>
        case "cosmosdbplain":
            return <icons.CosmosdbPlain size={size}/>
        case "couchbaseoriginalwordmark":
            return <icons.CouchbaseOriginalWordmark size={size}/>
        case "couchbaseoriginal":
            return <icons.CouchbaseOriginal size={size}/>
        case "couchbaseplainwordmark":
            return <icons.CouchbasePlainWordmark size={size}/>
        case "couchdboriginalwordmark":
            return <icons.CouchdbOriginalWordmark size={size}/>
        case "couchdboriginal":
            return <icons.CouchdbOriginal size={size}/>
        case "couchdbplainwordmark":
            return <icons.CouchdbPlainWordmark size={size}/>
        case "couchdbplain":
            return <icons.CouchdbPlain size={size}/>
        case "cplusplusline":
            return <icons.CplusplusLine size={size}/>
        case "cplusplusoriginal":
            return <icons.CplusplusOriginal size={size}/>
        case "cplusplusplain":
            return <icons.CplusplusPlain size={size}/>
        case "crystallinewordmark":
            return <icons.CrystalLineWordmark size={size}/>
        case "crystalline":
            return <icons.CrystalLine size={size}/>
        case "crystaloriginalwordmark":
            return <icons.CrystalOriginalWordmark size={size}/>
        case "crystaloriginal":
            return <icons.CrystalOriginal size={size}/>
        case "csharpline":
            return <icons.CsharpLine size={size}/>
        case "csharporiginal":
            return <icons.CsharpOriginal size={size}/>
        case "csharpplain":
            return <icons.CsharpPlain size={size}/>
        case "css3originalwordmark":
            return <icons.Css3OriginalWordmark size={size}/>
        case "css3original":
            return <icons.Css3Original size={size}/>
        case "css3plainwordmark":
            return <icons.Css3PlainWordmark size={size}/>
        case "css3plain":
            return <icons.Css3Plain size={size}/>
        case "cucumberplainwordmark":
            return <icons.CucumberPlainWordmark size={size}/>
        case "cucumberplain":
            return <icons.CucumberPlain size={size}/>
        case "cypressiolinewordmark":
            return <icons.CypressioLineWordmark size={size}/>
        case "cypressioline":
            return <icons.CypressioLine size={size}/>
        case "cypressiooriginalwordmark":
            return <icons.CypressioOriginalWordmark size={size}/>
        case "cypressiooriginal":
            return <icons.CypressioOriginal size={size}/>
        case "cypressioplainwordmark":
            return <icons.CypressioPlainWordmark size={size}/>
        case "cypressioplain":
            return <icons.CypressioPlain size={size}/>
        case "d3jsoriginal":
            return <icons.D3jsOriginal size={size}/>
        case "d3jsplain":
            return <icons.D3jsPlain size={size}/>
        case "dartoriginalwordmark":
            return <icons.DartOriginalWordmark size={size}/>
        case "dartoriginal":
            return <icons.DartOriginal size={size}/>
        case "dartplainwordmark":
            return <icons.DartPlainWordmark size={size}/>
        case "dartplain":
            return <icons.DartPlain size={size}/>
        case "datagriporiginal":
            return <icons.DatagripOriginal size={size}/>
        case "datagripplainwordmark":
            return <icons.DatagripPlainWordmark size={size}/>
        case "datagripplain":
            return <icons.DatagripPlain size={size}/>
        case "dataspelloriginalwordmark":
            return <icons.DataspellOriginalWordmark size={size}/>
        case "dataspelloriginal":
            return <icons.DataspellOriginal size={size}/>
        case "dataspellplainwordmark":
            return <icons.DataspellPlainWordmark size={size}/>
        case "dataspellplain":
            return <icons.DataspellPlain size={size}/>
        case "dbeaveroriginal":
            return <icons.DbeaverOriginal size={size}/>
        case "dbeaverplain":
            return <icons.DbeaverPlain size={size}/>
        case "debianoriginalwordmark":
            return <icons.DebianOriginalWordmark size={size}/>
        case "debianoriginal":
            return <icons.DebianOriginal size={size}/>
        case "debianplainwordmark":
            return <icons.DebianPlainWordmark size={size}/>
        case "debianplain":
            return <icons.DebianPlain size={size}/>
        case "denojsoriginalwordmark":
            return <icons.DenojsOriginalWordmark size={size}/>
        case "denojsoriginal":
            return <icons.DenojsOriginal size={size}/>
        case "deviconsreactoriginal":
            return <icons.DeviconsReactOriginal size={size}/>
        case "digitaloceanoriginalwordmark":
            return <icons.DigitaloceanOriginalWordmark size={size}/>
        case "digitaloceanoriginal":
            return <icons.DigitaloceanOriginal size={size}/>
        case "djangorestlinewordmark":
            return <icons.DjangorestLineWordmark size={size}/>
        case "djangorestline":
            return <icons.DjangorestLine size={size}/>
        case "djangorestoriginalwordmark":
            return <icons.DjangorestOriginalWordmark size={size}/>
        case "djangorestoriginal":
            return <icons.DjangorestOriginal size={size}/>
        case "djangorestplainwordmark":
            return <icons.DjangorestPlainWordmark size={size}/>
        case "djangorestplain":
            return <icons.DjangorestPlain size={size}/>
        case "dockeroriginalwordmark":
            return <icons.DockerOriginalWordmark size={size}/>
        case "dockeroriginal":
            return <icons.DockerOriginal size={size}/>
        case "dockerplainwordmark":
            return <icons.DockerPlainWordmark size={size}/>
        case "dockerplain":
            return <icons.DockerPlain size={size}/>
        case "doctrinelinewordmark":
            return <icons.DoctrineLineWordmark size={size}/>
        case "doctrineline":
            return <icons.DoctrineLine size={size}/>
        case "doctrineoriginalwordmark":
            return <icons.DoctrineOriginalWordmark size={size}/>
        case "doctrineoriginal":
            return <icons.DoctrineOriginal size={size}/>
        case "doctrineplainwordmark":
            return <icons.DoctrinePlainWordmark size={size}/>
        case "doctrineplain":
            return <icons.DoctrinePlain size={size}/>
        case "dotnetoriginalwordmark":
            return <icons.DotNetOriginalWordmark size={size}/>
        case "dotnetoriginal":
            return <icons.DotNetOriginal size={size}/>
        case "cloudflareworkersoriginal":
            return <icons.CloudflareworkersOriginal size={size}/>
        case "reachoriginal":
            return <icons.ReachOriginal size={size}/>
        case "reachplain":
            return <icons.ReachPlain size={size}/>
        case "reactoriginalwordmark":
            return <icons.ReactOriginalWordmark size={size}/>
        case "reactoriginal":
            return <icons.ReactOriginal size={size}/>
        case "reactbootstraporiginal":
            return <icons.ReactbootstrapOriginal size={size}/>
        case "reactnavigationoriginal":
            return <icons.ReactnavigationOriginal size={size}/>
        case "reactrouteroriginalwordmark":
            return <icons.ReactrouterOriginalWordmark size={size}/>
        case "aarch64line":
            return <icons.Aarch64Line size={size}/>
        case "aarch64original":
            return <icons.Aarch64Original size={size}/>
        case "aarch64plain":
            return <icons.Aarch64Plain size={size}/>
        case "adonisjsoriginalwordmark":
            return <icons.AdonisjsOriginalWordmark size={size}/>
        case "adonisjsoriginal":
            return <icons.AdonisjsOriginal size={size}/>
        case "aftereffectsoriginal":
            return <icons.AftereffectsOriginal size={size}/>
        case "aftereffectsplain":
            return <icons.AftereffectsPlain size={size}/>
        case "akkaoriginalwordmark":
            return <icons.AkkaOriginalWordmark size={size}/>
        case "akkaoriginal":
            return <icons.AkkaOriginal size={size}/>
        case "akkaplainwordmark":
            return <icons.AkkaPlainWordmark size={size}/>
        case "akkaplain":
            return <icons.AkkaPlain size={size}/>
        case "algoliaoriginalwordmark":
            return <icons.AlgoliaOriginalWordmark size={size}/>
        case "algoliaoriginal":
            return <icons.AlgoliaOriginal size={size}/>
        case "alpinejsoriginalwordmark":
            return <icons.AlpinejsOriginalWordmark size={size}/>
        case "alpinejsoriginal":
            return <icons.AlpinejsOriginal size={size}/>
        case "amazonwebserviceslinewordmark":
            return <icons.AmazonwebservicesLineWordmark size={size}/>
        case "amazonwebservicesoriginalwordmark":
            return <icons.AmazonwebservicesOriginalWordmark size={size}/>
        case "amazonwebservicesplainwordmark":
            return <icons.AmazonwebservicesPlainWordmark size={size}/>
        case "anacondaoriginalwordmark":
            return <icons.AnacondaOriginalWordmark size={size}/>
        case "anacondaoriginal":
            return <icons.AnacondaOriginal size={size}/>
        case "androidoriginalwordmark":
            return <icons.AndroidOriginalWordmark size={size}/>
        case "androidoriginal":
            return <icons.AndroidOriginal size={size}/>
        case "androidplainwordmark":
            return <icons.AndroidPlainWordmark size={size}/>
        case "androidplain":
            return <icons.AndroidPlain size={size}/>
        case "androidstudiooriginalwordmark":
            return <icons.AndroidstudioOriginalWordmark size={size}/>
        case "androidstudiooriginal":
            return <icons.AndroidstudioOriginal size={size}/>
        case "androidstudioplainwordmark":
            return <icons.AndroidstudioPlainWordmark size={size}/>
        case "androidstudioplain":
            return <icons.AndroidstudioPlain size={size}/>
        case "angularoriginalwordmark":
            return <icons.AngularOriginalWordmark size={size}/>
        case "angularoriginal":
            return <icons.AngularOriginal size={size}/>
        case "angularplainwordmark":
            return <icons.AngularPlainWordmark size={size}/>
        case "angularplain":
            return <icons.AngularPlain size={size}/>
        case "angularjsoriginalwordmark":
            return <icons.AngularjsOriginalWordmark size={size}/>
        case "angularjsoriginal":
            return <icons.AngularjsOriginal size={size}/>
        case "angularjsplainwordmark":
            return <icons.AngularjsPlainWordmark size={size}/>
        case "angularjsplain":
            return <icons.AngularjsPlain size={size}/>
        case "angularmaterialoriginal":
            return <icons.AngularmaterialOriginal size={size}/>
        case "angularmaterialplain":
            return <icons.AngularmaterialPlain size={size}/>
        case "ansibleoriginalwordmark":
            return <icons.AnsibleOriginalWordmark size={size}/>
        case "ansibleoriginal":
            return <icons.AnsibleOriginal size={size}/>
        case "ansibleplainwordmark":
            return <icons.AnsiblePlainWordmark size={size}/>
        case "ansibleplain":
            return <icons.AnsiblePlain size={size}/>
        case "antdesignoriginalwordmark":
            return <icons.AntdesignOriginalWordmark size={size}/>
        case "antdesignoriginal":
            return <icons.AntdesignOriginal size={size}/>
        case "antdesignplainwordmark":
            return <icons.AntdesignPlainWordmark size={size}/>
        case "antdesignplain":
            return <icons.AntdesignPlain size={size}/>
        case "apachelinewordmark":
            return <icons.ApacheLineWordmark size={size}/>
        case "apacheline":
            return <icons.ApacheLine size={size}/>
        case "apacheoriginalwordmark":
            return <icons.ApacheOriginalWordmark size={size}/>
        case "apacheoriginal":
            return <icons.ApacheOriginal size={size}/>
        case "apacheplainwordmark":
            return <icons.ApachePlainWordmark size={size}/>
        case "apacheplain":
            return <icons.ApachePlain size={size}/>
        case "apacheairfloworiginalwordmark":
            return <icons.ApacheairflowOriginalWordmark size={size}/>
        case "apacheairfloworiginal":
            return <icons.ApacheairflowOriginal size={size}/>
        case "apacheairflowplainwordmark":
            return <icons.ApacheairflowPlainWordmark size={size}/>
        case "apacheairflowplain":
            return <icons.ApacheairflowPlain size={size}/>
        case "apachekafkaoriginalwordmark":
            return <icons.ApachekafkaOriginalWordmark size={size}/>
        case "apachekafkaoriginal":
            return <icons.ApachekafkaOriginal size={size}/>
        case "apachesparkoriginalwordmark":
            return <icons.ApachesparkOriginalWordmark size={size}/>
        case "apachesparkoriginal":
            return <icons.ApachesparkOriginal size={size}/>
        case "apachesparkplainwordmark":
            return <icons.ApachesparkPlainWordmark size={size}/>
        case "aploriginal":
            return <icons.AplOriginal size={size}/>
        case "aplplain":
            return <icons.AplPlain size={size}/>
        case "appceleratororiginalwordmark":
            return <icons.AppceleratorOriginalWordmark size={size}/>
        case "appceleratororiginal":
            return <icons.AppceleratorOriginal size={size}/>
        case "appceleratorplainwordmark":
            return <icons.AppceleratorPlainWordmark size={size}/>
        case "appleoriginal":
            return <icons.AppleOriginal size={size}/>
        case "appwriteoriginalwordmark":
            return <icons.AppwriteOriginalWordmark size={size}/>
        case "appwriteoriginal":
            return <icons.AppwriteOriginal size={size}/>
        case "appwriteplainwordmark":
            return <icons.AppwritePlainWordmark size={size}/>
        case "appwriteplain":
            return <icons.AppwritePlain size={size}/>
        case "archlinuxoriginalwordmark":
            return <icons.ArchlinuxOriginalWordmark size={size}/>
        case "archlinuxoriginal":
            return <icons.ArchlinuxOriginal size={size}/>
        case "archlinuxplainwordmark":
            return <icons.ArchlinuxPlainWordmark size={size}/>
        case "archlinuxplain":
            return <icons.ArchlinuxPlain size={size}/>
        case "arduinooriginalwordmark":
            return <icons.ArduinoOriginalWordmark size={size}/>
        case "arduinooriginal":
            return <icons.ArduinoOriginal size={size}/>
        case "arduinoplainwordmark":
            return <icons.ArduinoPlainWordmark size={size}/>
        case "arduinoplain":
            return <icons.ArduinoPlain size={size}/>
        case "argocdoriginal":
            return <icons.ArgocdOriginal size={size}/>
        case "argocdplainwordmark":
            return <icons.ArgocdPlainWordmark size={size}/>
        case "argocdplain":
            return <icons.ArgocdPlain size={size}/>
        case "astrooriginalwordmark":
            return <icons.AstroOriginalWordmark size={size}/>
        case "astrooriginal":
            return <icons.AstroOriginal size={size}/>
        case "astroplainwordmark":
            return <icons.AstroPlainWordmark size={size}/>
        case "atomoriginalwordmark":
            return <icons.AtomOriginalWordmark size={size}/>
        case "atomoriginal":
            return <icons.AtomOriginal size={size}/>
        case "emacsoriginal":
            return <icons.EmacsOriginal size={size}/>
        case "qodanaplain":
            return <icons.QodanaPlain size={size}/>
        case "qtoriginal":
            return <icons.QtOriginal size={size}/>
        case "quarkusoriginalwordmark":
            return <icons.QuarkusOriginalWordmark size={size}/>
        case "quarkusoriginal":
            return <icons.QuarkusOriginal size={size}/>
        case "quarkusplainwordmark":
            return <icons.QuarkusPlainWordmark size={size}/>
        case "quarkusplain":
            return <icons.QuarkusPlain size={size}/>
        case "quasaroriginalwordmark":
            return <icons.QuasarOriginalWordmark size={size}/>
        case "quasaroriginal":
            return <icons.QuasarOriginal size={size}/>
        case "argocdoriginalwordmark":
            return <icons.ArgocdOriginalWordmark size={size}/>
        case "reactrouteroriginal":
            return <icons.ReactrouterOriginal size={size}/>
        case "reactrouterplainwordmark":
            return <icons.ReactrouterPlainWordmark size={size}/>
        case "reactrouterplain":
            return <icons.ReactrouterPlain size={size}/>
        case "readthedocsline":
            return <icons.ReadthedocsLine size={size}/>
        case "readthedocsoriginalwordmark":
            return <icons.ReadthedocsOriginalWordmark size={size}/>
        case "readthedocsoriginal":
            return <icons.ReadthedocsOriginal size={size}/>
        case "realmoriginalwordmark":
            return <icons.RealmOriginalWordmark size={size}/>
        case "realmoriginal":
            return <icons.RealmOriginal size={size}/>
        case "realmplainwordmark":
            return <icons.RealmPlainWordmark size={size}/>
        case "realmplain":
            return <icons.RealmPlain size={size}/>
        case "rectoriginal":
            return <icons.RectOriginal size={size}/>
        case "rectplain":
            return <icons.RectPlain size={size}/>
        case "redhatoriginalwordmark":
            return <icons.RedhatOriginalWordmark size={size}/>
        case "redhatoriginal":
            return <icons.RedhatOriginal size={size}/>
        case "redhatplainwordmark":
            return <icons.RedhatPlainWordmark size={size}/>
        case "redhatplain":
            return <icons.RedhatPlain size={size}/>
        case "redisoriginalwordmark":
            return <icons.RedisOriginalWordmark size={size}/>
        case "redisoriginal":
            return <icons.RedisOriginal size={size}/>
        case "redisplainwordmark":
            return <icons.RedisPlainWordmark size={size}/>
        case "redisplain":
            return <icons.RedisPlain size={size}/>
        case "reduxoriginal":
            return <icons.ReduxOriginal size={size}/>
        case "renpyoriginal":
            return <icons.RenpyOriginal size={size}/>
        case "renpyplain":
            return <icons.RenpyPlain size={size}/>
        case "replitoriginalwordmark":
            return <icons.ReplitOriginalWordmark size={size}/>
        case "replitoriginal":
            return <icons.ReplitOriginal size={size}/>
        case "replitplainwordmark":
            return <icons.ReplitPlainWordmark size={size}/>
        case "rideroriginalwordmark":
            return <icons.RiderOriginalWordmark size={size}/>
        case "rideroriginal":
            return <icons.RiderOriginal size={size}/>
        case "riderplainwordmark":
            return <icons.RiderPlainWordmark size={size}/>
        case "riderplain":
            return <icons.RiderPlain size={size}/>
        case "rocksdbline":
            return <icons.RocksdbLine size={size}/>
        case "rocksdboriginal":
            return <icons.RocksdbOriginal size={size}/>
        case "rocksdbplain":
            return <icons.RocksdbPlain size={size}/>
        case "rockylinuxoriginalwordmark":
            return <icons.RockylinuxOriginalWordmark size={size}/>
        case "rockylinuxoriginal":
            return <icons.RockylinuxOriginal size={size}/>
        case "rockylinuxplainwordmark":
            return <icons.RockylinuxPlainWordmark size={size}/>
        case "rolluplinewordmark":
            return <icons.RollupLineWordmark size={size}/>
        case "rollupline":
            return <icons.RollupLine size={size}/>
        case "rolluporiginalwordmark":
            return <icons.RollupOriginalWordmark size={size}/>
        case "rolluporiginal":
            return <icons.RollupOriginal size={size}/>
        case "rollupplainwordmark":
            return <icons.RollupPlainWordmark size={size}/>
        case "rollupplain":
            return <icons.RollupPlain size={size}/>
        case "rosoriginalwordmark":
            return <icons.RosOriginalWordmark size={size}/>
        case "rosoriginal":
            return <icons.RosOriginal size={size}/>
        case "rspeclinewordmark":
            return <icons.RspecLineWordmark size={size}/>
        case "rspecline":
            return <icons.RspecLine size={size}/>
        case "rspecoriginalwordmark":
            return <icons.RspecOriginalWordmark size={size}/>
        case "rspecoriginal":
            return <icons.RspecOriginal size={size}/>
        case "rspecplainwordmark":
            return <icons.RspecPlainWordmark size={size}/>
        case "rspecplain":
            return <icons.RspecPlain size={size}/>
        case "rstudiooriginal":
            return <icons.RstudioOriginal size={size}/>
        case "rstudioplain":
            return <icons.RstudioPlain size={size}/>
        case "nodemonplain":
            return <icons.NodemonPlain size={size}/>
        case "nodewebkitlinewordmark":
            return <icons.NodewebkitLineWordmark size={size}/>
        case "nodewebkitline":
            return <icons.NodewebkitLine size={size}/>
        case "nodewebkitoriginalwordmark":
            return <icons.NodewebkitOriginalWordmark size={size}/>
        case "nodewebkitoriginal":
            return <icons.NodewebkitOriginal size={size}/>
        case "nodewebkitplainwordmark":
            return <icons.NodewebkitPlainWordmark size={size}/>
        case "nodewebkitplain":
            return <icons.NodewebkitPlain size={size}/>
        case "nomadoriginalwordmark":
            return <icons.NomadOriginalWordmark size={size}/>
        case "nomadoriginal":
            return <icons.NomadOriginal size={size}/>
        case "nomadplainwordmark":
            return <icons.NomadPlainWordmark size={size}/>
        case "norgoriginal":
            return <icons.NorgOriginal size={size}/>
        case "norgplain":
            return <icons.NorgPlain size={size}/>
        case "notionline":
            return <icons.NotionLine size={size}/>
        case "notionoriginal":
            return <icons.NotionOriginal size={size}/>
        case "notionplain":
            return <icons.NotionPlain size={size}/>
        case "npmoriginalwordmark":
            return <icons.NpmOriginalWordmark size={size}/>
        case "nugetoriginalwordmark":
            return <icons.NugetOriginalWordmark size={size}/>
        case "nugetoriginal":
            return <icons.NugetOriginal size={size}/>
        case "numpylinewordmark":
            return <icons.NumpyLineWordmark size={size}/>
        case "numpyline":
            return <icons.NumpyLine size={size}/>
        case "numpyoriginalwordmark":
            return <icons.NumpyOriginalWordmark size={size}/>
        case "numpyoriginal":
            return <icons.NumpyOriginal size={size}/>
        case "numpyplainwordmark":
            return <icons.NumpyPlainWordmark size={size}/>
        case "numpyplain":
            return <icons.NumpyPlain size={size}/>
        case "rubyoriginalwordmark":
            return <icons.RubyOriginalWordmark size={size}/>
        case "rubyoriginal":
            return <icons.RubyOriginal size={size}/>
        case "rubyplainwordmark":
            return <icons.RubyPlainWordmark size={size}/>
        case "rubyplain":
            return <icons.RubyPlain size={size}/>
        case "rubymineoriginalwordmark":
            return <icons.RubymineOriginalWordmark size={size}/>
        case "rubymineoriginal":
            return <icons.RubymineOriginal size={size}/>
        case "rubymineplainwordmark":
            return <icons.RubyminePlainWordmark size={size}/>
        case "rubymineplain":
            return <icons.RubyminePlain size={size}/>
        case "rustline":
            return <icons.RustLine size={size}/>
        case "rustoriginal":
            return <icons.RustOriginal size={size}/>
        case "rxjsoriginal":
            return <icons.RxjsOriginal size={size}/>
        case "rxjsplain":
            return <icons.RxjsPlain size={size}/>
        case "safarilinewordmark":
            return <icons.SafariLineWordmark size={size}/>
        case "safariline":
            return <icons.SafariLine size={size}/>
        case "safarioriginalwordmark":
            return <icons.SafariOriginalWordmark size={size}/>
        case "safarioriginal":
            return <icons.SafariOriginal size={size}/>
        case "safariplainwordmark":
            return <icons.SafariPlainWordmark size={size}/>
        case "safariplain":
            return <icons.SafariPlain size={size}/>
        case "salesforceoriginal":
            return <icons.SalesforceOriginal size={size}/>
        case "salesforceplain":
            return <icons.SalesforcePlain size={size}/>
        case "sanityoriginal":
            return <icons.SanityOriginal size={size}/>
        case "sanityplain":
            return <icons.SanityPlain size={size}/>
        case "sassoriginal":
            return <icons.SassOriginal size={size}/>
        case "scalaoriginalwordmark":
            return <icons.ScalaOriginalWordmark size={size}/>
        case "scalaoriginal":
            return <icons.ScalaOriginal size={size}/>
        case "scalaplainwordmark":
            return <icons.ScalaPlainWordmark size={size}/>
        case "scalaplain":
            return <icons.ScalaPlain size={size}/>
        case "scalingolinewordmark":
            return <icons.ScalingoLineWordmark size={size}/>
        case "scalingoline":
            return <icons.ScalingoLine size={size}/>
        case "scalingooriginalwordmark":
            return <icons.ScalingoOriginalWordmark size={size}/>
        case "scalingooriginal":
            return <icons.ScalingoOriginal size={size}/>
        case "scalingoplainwordmark":
            return <icons.ScalingoPlainWordmark size={size}/>
        case "scalingoplain":
            return <icons.ScalingoPlain size={size}/>
        case "scikitlearnline":
            return <icons.ScikitlearnLine size={size}/>
        case "scikitlearnoriginal":
            return <icons.ScikitlearnOriginal size={size}/>
        case "scikitlearnplain":
            return <icons.ScikitlearnPlain size={size}/>
        case "sdloriginal":
            return <icons.SdlOriginal size={size}/>
        case "sdlplain":
            return <icons.SdlPlain size={size}/>
        case "seleniumoriginal":
            return <icons.SeleniumOriginal size={size}/>
        case "semaoriginalwordmark":
            return <icons.SemaOriginalWordmark size={size}/>
        case "semaoriginal":
            return <icons.SemaOriginal size={size}/>
        case "sentryoriginalwordmark":
            return <icons.SentryOriginalWordmark size={size}/>
        case "sentryoriginal":
            return <icons.SentryOriginal size={size}/>
        case "sequelizeoriginalwordmark":
            return <icons.SequelizeOriginalWordmark size={size}/>
        case "sequelizeoriginal":
            return <icons.SequelizeOriginal size={size}/>
        case "sequelizeplainwordmark":
            return <icons.SequelizePlainWordmark size={size}/>
        case "sequelizeplain":
            return <icons.SequelizePlain size={size}/>
        case "shopwareoriginalwordmark":
            return <icons.ShopwareOriginalWordmark size={size}/>
        case "shopwareoriginal":
            return <icons.ShopwareOriginal size={size}/>
        case "shotgridoriginalwordmark":
            return <icons.ShotgridOriginalWordmark size={size}/>
        case "shotgridoriginal":
            return <icons.ShotgridOriginal size={size}/>
        case "shotgridplain":
            return <icons.ShotgridPlain size={size}/>
        case "sketchlinewordmark":
            return <icons.SketchLineWordmark size={size}/>
        case "sketchline":
            return <icons.SketchLine size={size}/>
        case "sketchoriginalwordmark":
            return <icons.SketchOriginalWordmark size={size}/>
        case "sketchoriginal":
            return <icons.SketchOriginal size={size}/>
        case "sketchplainwordmark":
            return <icons.SketchPlainWordmark size={size}/>
        case "sketchplain":
            return <icons.SketchPlain size={size}/>
        case "slackoriginalwordmark":
            return <icons.SlackOriginalWordmark size={size}/>
        case "slackoriginal":
            return <icons.SlackOriginal size={size}/>
        case "slackplainwordmark":
            return <icons.SlackPlainWordmark size={size}/>
        case "slackplain":
            return <icons.SlackPlain size={size}/>
        case "socketiooriginalwordmark":
            return <icons.SocketioOriginalWordmark size={size}/>
        case "socketiooriginal":
            return <icons.SocketioOriginal size={size}/>
        case "solidityoriginal":
            return <icons.SolidityOriginal size={size}/>
        case "dotnetplainwordmark":
            return <icons.DotNetPlainWordmark size={size}/>
        case "dotnetcoreoriginal":
            return <icons.DotnetcoreOriginal size={size}/>
        case "dotnetcoreplain":
            return <icons.DotnetcorePlain size={size}/>
        case "dreamweaverline":
            return <icons.DreamweaverLine size={size}/>
        case "dreamweaveroriginal":
            return <icons.DreamweaverOriginal size={size}/>
        case "dreamweaverplain":
            return <icons.DreamweaverPlain size={size}/>
        case "dropwizardoriginal":
            return <icons.DropwizardOriginal size={size}/>
        case "dropwizardplain":
            return <icons.DropwizardPlain size={size}/>
        case "drupaloriginalwordmark":
            return <icons.DrupalOriginalWordmark size={size}/>
        case "drupaloriginal":
            return <icons.DrupalOriginal size={size}/>
        case "drupalplainwordmark":
            return <icons.DrupalPlainWordmark size={size}/>
        case "drupalplain":
            return <icons.DrupalPlain size={size}/>
        case "dynamodboriginal":
            return <icons.DynamodbOriginal size={size}/>
        case "dynamodbplain":
            return <icons.DynamodbPlain size={size}/>
        case "eclipseoriginalwordmark":
            return <icons.EclipseOriginalWordmark size={size}/>
        case "eclipseoriginal":
            return <icons.EclipseOriginal size={size}/>
        case "eclipseplainwordmark":
            return <icons.EclipsePlainWordmark size={size}/>
        case "eclipseplain":
            return <icons.EclipsePlain size={size}/>
        case "ectooriginalwordmark":
            return <icons.EctoOriginalWordmark size={size}/>
        case "ectooriginal":
            return <icons.EctoOriginal size={size}/>
        case "ectoplainwordmark":
            return <icons.EctoPlainWordmark size={size}/>
        case "elasticsearchoriginalwordmark":
            return <icons.ElasticsearchOriginalWordmark size={size}/>
        case "elasticsearchoriginal":
            return <icons.ElasticsearchOriginal size={size}/>
        case "elasticsearchplainwordmark":
            return <icons.ElasticsearchPlainWordmark size={size}/>
        case "elasticsearchplain":
            return <icons.ElasticsearchPlain size={size}/>
        case "electronoriginalwordmark":
            return <icons.ElectronOriginalWordmark size={size}/>
        case "electronoriginal":
            return <icons.ElectronOriginal size={size}/>
        case "eleventyoriginal":
            return <icons.EleventyOriginal size={size}/>
        case "eleventyplain":
            return <icons.EleventyPlain size={size}/>
        case "elixiroriginalwordmark":
            return <icons.ElixirOriginalWordmark size={size}/>
        case "elixiroriginal":
            return <icons.ElixirOriginal size={size}/>
        case "elixirplainwordmark":
            return <icons.ElixirPlainWordmark size={size}/>
        case "elixirplain":
            return <icons.ElixirPlain size={size}/>
        case "elmoriginalwordmark":
            return <icons.ElmOriginalWordmark size={size}/>
        case "elmoriginal":
            return <icons.ElmOriginal size={size}/>
        case "elmplainwordmark":
            return <icons.ElmPlainWordmark size={size}/>
        case "elmplain":
            return <icons.ElmPlain size={size}/>
        case "embeddedcoriginalwordmark":
            return <icons.EmbeddedcOriginalWordmark size={size}/>
        case "awkplainwordmark":
            return <icons.AwkPlainWordmark size={size}/>
        case "embeddedcplainwordmark":
            return <icons.EmbeddedcPlainWordmark size={size}/>
        case "embeddedcplain":
            return <icons.EmbeddedcPlain size={size}/>
        case "emberoriginalwordmark":
            return <icons.EmberOriginalWordmark size={size}/>
        case "emberoriginal":
            return <icons.EmberOriginal size={size}/>
        case "emberplain":
            return <icons.EmberPlain size={size}/>
        case "envoyoriginalwordmark":
            return <icons.EnvoyOriginalWordmark size={size}/>
        case "envoyoriginal":
            return <icons.EnvoyOriginal size={size}/>
        case "envoyplainwordmark":
            return <icons.EnvoyPlainWordmark size={size}/>
        case "envoyplain":
            return <icons.EnvoyPlain size={size}/>
        case "erlangoriginalwordmark":
            return <icons.ErlangOriginalWordmark size={size}/>
        case "erlangoriginal":
            return <icons.ErlangOriginal size={size}/>
        case "erlangplainwordmark":
            return <icons.ErlangPlainWordmark size={size}/>
        case "erlangplain":
            return <icons.ErlangPlain size={size}/>
        case "eslintlinewordmark":
            return <icons.EslintLineWordmark size={size}/>
        case "eslintline":
            return <icons.EslintLine size={size}/>
        case "eslintoriginalwordmark":
            return <icons.EslintOriginalWordmark size={size}/>
        case "eslintoriginal":
            return <icons.EslintOriginal size={size}/>
        case "eslintplainwordmark":
            return <icons.EslintPlainWordmark size={size}/>
        case "eslintplain":
            return <icons.EslintPlain size={size}/>
        case "expressoriginalwordmark":
            return <icons.ExpressOriginalWordmark size={size}/>
        case "expressoriginal":
            return <icons.ExpressOriginal size={size}/>
        case "facebookoriginal":
            return <icons.FacebookOriginal size={size}/>
        case "facebookplain":
            return <icons.FacebookPlain size={size}/>
        case "fastapioriginalwordmark":
            return <icons.FastapiOriginalWordmark size={size}/>
        case "fastapioriginal":
            return <icons.FastapiOriginal size={size}/>
        case "fastapiplainwordmark":
            return <icons.FastapiPlainWordmark size={size}/>
        case "fastapiplain":
            return <icons.FastapiPlain size={size}/>
        case "fastifyoriginalwordmark":
            return <icons.FastifyOriginalWordmark size={size}/>
        case "fastifyoriginal":
            return <icons.FastifyOriginal size={size}/>
        case "fastifyplainwordmark":
            return <icons.FastifyPlainWordmark size={size}/>
        case "fastifyplain":
            return <icons.FastifyPlain size={size}/>
        case "faunadblinewordmark":
            return <icons.FaunadbLineWordmark size={size}/>
        case "faunadbline":
            return <icons.FaunadbLine size={size}/>
        case "faunadboriginalwordmark":
            return <icons.FaunadbOriginalWordmark size={size}/>
        case "faunadboriginal":
            return <icons.FaunadbOriginal size={size}/>
        case "feathersjsoriginal":
            return <icons.FeathersjsOriginal size={size}/>
        case "fedoraoriginal":
            return <icons.FedoraOriginal size={size}/>
        case "fedoraplain":
            return <icons.FedoraPlain size={size}/>
        case "figmaoriginal":
            return <icons.FigmaOriginal size={size}/>
        case "figmaplain":
            return <icons.FigmaPlain size={size}/>
        case "filezillalinewordmark":
            return <icons.FilezillaLineWordmark size={size}/>
        case "filezillaline":
            return <icons.FilezillaLine size={size}/>
        case "filezillaoriginalwordmark":
            return <icons.FilezillaOriginalWordmark size={size}/>
        case "filezillaoriginal":
            return <icons.FilezillaOriginal size={size}/>
        case "filezillaplainwordmark":
            return <icons.FilezillaPlainWordmark size={size}/>
        case "filezillaplain":
            return <icons.FilezillaPlain size={size}/>
        case "firebaselinewordmark":
            return <icons.FirebaseLineWordmark size={size}/>
        case "firebaseline":
            return <icons.FirebaseLine size={size}/>
        case "firebaseoriginalwordmark":
            return <icons.FirebaseOriginalWordmark size={size}/>
        case "firebaseoriginal":
            return <icons.FirebaseOriginal size={size}/>
        case "firebaseplainwordmark":
            return <icons.FirebasePlainWordmark size={size}/>
        case "firebaseplain":
            return <icons.FirebasePlain size={size}/>
        case "firefoxoriginalwordmark":
            return <icons.FirefoxOriginalWordmark size={size}/>
        case "firefoxoriginal":
            return <icons.FirefoxOriginal size={size}/>
        case "firefoxplainwordmark":
            return <icons.FirefoxPlainWordmark size={size}/>
        case "firefoxplain":
            return <icons.FirefoxPlain size={size}/>
        case "flaskoriginalwordmark":
            return <icons.FlaskOriginalWordmark size={size}/>
        case "flaskoriginal":
            return <icons.FlaskOriginal size={size}/>
        case "flutteroriginal":
            return <icons.FlutterOriginal size={size}/>
        case "flutterplain":
            return <icons.FlutterPlain size={size}/>
        case "fortranoriginal":
            return <icons.FortranOriginal size={size}/>
        case "foundationoriginalwordmark":
            return <icons.FoundationOriginalWordmark size={size}/>
        case "foundationoriginal":
            return <icons.FoundationOriginal size={size}/>
        case "foundationplainwordmark":
            return <icons.FoundationPlainWordmark size={size}/>
        case "foundationplain":
            return <icons.FoundationPlain size={size}/>
        case "framermotionoriginalwordmark":
            return <icons.FramermotionOriginalWordmark size={size}/>
        case "framermotionoriginal":
            return <icons.FramermotionOriginal size={size}/>
        case "framework7originalwordmark":
            return <icons.Framework7OriginalWordmark size={size}/>
        case "framework7original":
            return <icons.Framework7Original size={size}/>
        case "fsharporiginal":
            return <icons.FsharpOriginal size={size}/>
        case "fsharpplain":
            return <icons.FsharpPlain size={size}/>
        case "gatlinglinewordmark":
            return <icons.GatlingLineWordmark size={size}/>
        case "gatlingline":
            return <icons.GatlingLine size={size}/>
        case "gatlingoriginalwordmark":
            return <icons.GatlingOriginalWordmark size={size}/>
        case "gatlingoriginal":
            return <icons.GatlingOriginal size={size}/>
        case "gatlingplainwordmark":
            return <icons.GatlingPlainWordmark size={size}/>
        case "gatsbyoriginalwordmark":
            return <icons.GatsbyOriginalWordmark size={size}/>
        case "gatsbyoriginal":
            return <icons.GatsbyOriginal size={size}/>
        case "gatsbyplainwordmark":
            return <icons.GatsbyPlainWordmark size={size}/>
        case "gazebooriginalwordmark":
            return <icons.GazeboOriginalWordmark size={size}/>
        case "gazebooriginal":
            return <icons.GazeboOriginal size={size}/>
        case "gazeboplainwordmark":
            return <icons.GazeboPlainWordmark size={size}/>
        case "gazeboplain":
            return <icons.GazeboPlain size={size}/>
        case "gccline":
            return <icons.GccLine size={size}/>
        case "gccoriginal":
            return <icons.GccOriginal size={size}/>
        case "gccplain":
            return <icons.GccPlain size={size}/>
        case "gentoolinewordmark":
            return <icons.GentooLineWordmark size={size}/>
        case "gentooline":
            return <icons.GentooLine size={size}/>
        case "gentoooriginalwordmark":
            return <icons.GentooOriginalWordmark size={size}/>
        case "gentoooriginal":
            return <icons.GentooOriginal size={size}/>
        case "gentooplainwordmark":
            return <icons.GentooPlainWordmark size={size}/>
        case "gentooplain":
            return <icons.GentooPlain size={size}/>
        case "ghostoriginalwordmark":
            return <icons.GhostOriginalWordmark size={size}/>
        case "ghostoriginal":
            return <icons.GhostOriginal size={size}/>
        case "gimplinewordmark":
            return <icons.GimpLineWordmark size={size}/>
        case "gimpline":
            return <icons.GimpLine size={size}/>
        case "gimporiginalwordmark":
            return <icons.GimpOriginalWordmark size={size}/>
        case "gimporiginal":
            return <icons.GimpOriginal size={size}/>
        case "gimpplainwordmark":
            return <icons.GimpPlainWordmark size={size}/>
        case "gimpplain":
            return <icons.GimpPlain size={size}/>
        case "gitoriginalwordmark":
            return <icons.GitOriginalWordmark size={size}/>
        case "gitoriginal":
            return <icons.GitOriginal size={size}/>
        case "gitplainwordmark":
            return <icons.GitPlainWordmark size={size}/>
        case "gitplain":
            return <icons.GitPlain size={size}/>
        case "gitbooklinewordmark":
            return <icons.GitbookLineWordmark size={size}/>
        case "gitbookline":
            return <icons.GitbookLine size={size}/>
        case "gitbookoriginalwordmark":
            return <icons.GitbookOriginalWordmark size={size}/>
        case "gitbookoriginal":
            return <icons.GitbookOriginal size={size}/>
        case "githuboriginalwordmark":
            return <icons.GithubOriginalWordmark size={size}/>
        case "githuboriginal":
            return <icons.GithubOriginal size={size}/>
        case "githubactionsoriginal":
            return <icons.GithubactionsOriginal size={size}/>
        case "githubactionsplain":
            return <icons.GithubactionsPlain size={size}/>
        case "githubcodespacesoriginal":
            return <icons.GithubcodespacesOriginal size={size}/>
        case "githubcodespacesplain":
            return <icons.GithubcodespacesPlain size={size}/>
        case "gitlaboriginalwordmark":
            return <icons.GitlabOriginalWordmark size={size}/>
        case "gitlaboriginal":
            return <icons.GitlabOriginal size={size}/>
        case "gitlabplainwordmark":
            return <icons.GitlabPlainWordmark size={size}/>
        case "gitlabplain":
            return <icons.GitlabPlain size={size}/>
        case "gitpodoriginalwordmark":
            return <icons.GitpodOriginalWordmark size={size}/>
        case "gitpodoriginal":
            return <icons.GitpodOriginal size={size}/>
        case "gitpodplainwordmark":
            return <icons.GitpodPlainWordmark size={size}/>
        case "gitpodplain":
            return <icons.GitpodPlain size={size}/>
        case "gitterplainwordmark":
            return <icons.GitterPlainWordmark size={size}/>
        case "gitterplain":
            return <icons.GitterPlain size={size}/>
        case "goline":
            return <icons.GoLine size={size}/>
        case "gooriginalwordmark":
            return <icons.GoOriginalWordmark size={size}/>
        case "gooriginal":
            return <icons.GoOriginal size={size}/>
        case "goplain":
            return <icons.GoPlain size={size}/>
        case "godotoriginalwordmark":
            return <icons.GodotOriginalWordmark size={size}/>
        case "godotoriginal":
            return <icons.GodotOriginal size={size}/>
        case "godotplainwordmark":
            return <icons.GodotPlainWordmark size={size}/>
        case "godotplain":
            return <icons.GodotPlain size={size}/>
        case "golandoriginal":
            return <icons.GolandOriginal size={size}/>
        case "golandplainwordmark":
            return <icons.GolandPlainWordmark size={size}/>
        case "golandplain":
            return <icons.GolandPlain size={size}/>
        case "googleoriginalwordmark":
            return <icons.GoogleOriginalWordmark size={size}/>
        case "googleoriginal":
            return <icons.GoogleOriginal size={size}/>
        case "googleplainwordmark":
            return <icons.GooglePlainWordmark size={size}/>
        case "googleplain":
            return <icons.GooglePlain size={size}/>
        case "googlecloudoriginalwordmark":
            return <icons.GooglecloudOriginalWordmark size={size}/>
        case "googlecloudoriginal":
            return <icons.GooglecloudOriginal size={size}/>
        case "googlecloudplainwordmark":
            return <icons.GooglecloudPlainWordmark size={size}/>
        case "googlecloudplain":
            return <icons.GooglecloudPlain size={size}/>
        case "gradleoriginalwordmark":
            return <icons.GradleOriginalWordmark size={size}/>
        case "gradleoriginal":
            return <icons.GradleOriginal size={size}/>
        case "grafanalinewordmark":
            return <icons.GrafanaLineWordmark size={size}/>
        case "grafanaline":
            return <icons.GrafanaLine size={size}/>
        case "grafanaoriginalwordmark":
            return <icons.GrafanaOriginalWordmark size={size}/>
        case "grafanaoriginal":
            return <icons.GrafanaOriginal size={size}/>
        case "grafanaplainwordmark":
            return <icons.GrafanaPlainWordmark size={size}/>
        case "grafanaplain":
            return <icons.GrafanaPlain size={size}/>
        case "grailsoriginal":
            return <icons.GrailsOriginal size={size}/>
        case "grailsplain":
            return <icons.GrailsPlain size={size}/>
        case "graphqlplainwordmark":
            return <icons.GraphqlPlainWordmark size={size}/>
        case "graphqlplain":
            return <icons.GraphqlPlain size={size}/>
        case "groovyoriginal":
            return <icons.GroovyOriginal size={size}/>
        case "groovyplain":
            return <icons.GroovyPlain size={size}/>
        case "grpcoriginal":
            return <icons.GrpcOriginal size={size}/>
        case "grpcplain":
            return <icons.GrpcPlain size={size}/>
        case "gruntlinewordmark":
            return <icons.GruntLineWordmark size={size}/>
        case "gruntline":
            return <icons.GruntLine size={size}/>
        case "gruntoriginalwordmark":
            return <icons.GruntOriginalWordmark size={size}/>
        case "gruntoriginal":
            return <icons.GruntOriginal size={size}/>
        case "gruntplainwordmark":
            return <icons.GruntPlainWordmark size={size}/>
        case "gruntplain":
            return <icons.GruntPlain size={size}/>
        case "gulpplain":
            return <icons.GulpPlain size={size}/>
        case "hadooporiginalwordmark":
            return <icons.HadoopOriginalWordmark size={size}/>
        case "hadooporiginal":
            return <icons.HadoopOriginal size={size}/>
        case "hadoopplainwordmark":
            return <icons.HadoopPlainWordmark size={size}/>
        case "hadoopplain":
            return <icons.HadoopPlain size={size}/>
        case "handlebarslinewordmark":
            return <icons.HandlebarsLineWordmark size={size}/>
        case "handlebarsline":
            return <icons.HandlebarsLine size={size}/>
        case "handlebarsoriginalwordmark":
            return <icons.HandlebarsOriginalWordmark size={size}/>
        case "handlebarsoriginal":
            return <icons.HandlebarsOriginal size={size}/>
        case "hardhatoriginalwordmark":
            return <icons.HardhatOriginalWordmark size={size}/>
        case "hardhatoriginal":
            return <icons.HardhatOriginal size={size}/>
        case "hardhatplainwordmark":
            return <icons.HardhatPlainWordmark size={size}/>
        case "hardhatplain":
            return <icons.HardhatPlain size={size}/>
        case "harvesteroriginalwordmark":
            return <icons.HarvesterOriginalWordmark size={size}/>
        case "harvesteroriginal":
            return <icons.HarvesterOriginal size={size}/>
        case "harvesterplainwordmark":
            return <icons.HarvesterPlainWordmark size={size}/>
        case "haskelloriginalwordmark":
            return <icons.HaskellOriginalWordmark size={size}/>
        case "haskelloriginal":
            return <icons.HaskellOriginal size={size}/>
        case "haskellplainwordmark":
            return <icons.HaskellPlainWordmark size={size}/>
        case "haskellplain":
            return <icons.HaskellPlain size={size}/>
        case "haxeoriginal":
            return <icons.HaxeOriginal size={size}/>
        case "haxeplain":
            return <icons.HaxePlain size={size}/>
        case "helmline":
            return <icons.HelmLine size={size}/>
        case "helmoriginal":
            return <icons.HelmOriginal size={size}/>
        case "herokuoriginalwordmark":
            return <icons.HerokuOriginalWordmark size={size}/>
        case "herokuoriginal":
            return <icons.HerokuOriginal size={size}/>
        case "herokuplainwordmark":
            return <icons.HerokuPlainWordmark size={size}/>
        case "herokuplain":
            return <icons.HerokuPlain size={size}/>
        case "hibernateoriginalwordmark":
            return <icons.HibernateOriginalWordmark size={size}/>
        case "hibernateoriginal":
            return <icons.HibernateOriginal size={size}/>
        case "hibernateplainwordmark":
            return <icons.HibernatePlainWordmark size={size}/>
        case "hibernateplain":
            return <icons.HibernatePlain size={size}/>
        case "homebrewlinewordmark":
            return <icons.HomebrewLineWordmark size={size}/>
        case "homebrewline":
            return <icons.HomebrewLine size={size}/>
        case "homebreworiginalwordmark":
            return <icons.HomebrewOriginalWordmark size={size}/>
        case "homebreworiginal":
            return <icons.HomebrewOriginal size={size}/>
        case "homebrewplainwordmark":
            return <icons.HomebrewPlainWordmark size={size}/>
        case "homebrewplain":
            return <icons.HomebrewPlain size={size}/>
        case "html5originalwordmark":
            return <icons.Html5OriginalWordmark size={size}/>
        case "html5original":
            return <icons.Html5Original size={size}/>
        case "html5plainwordmark":
            return <icons.Html5PlainWordmark size={size}/>
        case "html5plain":
            return <icons.Html5Plain size={size}/>
        case "hugooriginalwordmark":
            return <icons.HugoOriginalWordmark size={size}/>
        case "hugooriginal":
            return <icons.HugoOriginal size={size}/>
        case "hugoplainwordmark":
            return <icons.HugoPlainWordmark size={size}/>
        case "hugoplain":
            return <icons.HugoPlain size={size}/>
        case "ie10original":
            return <icons.Ie10Original size={size}/>
        case "iftttoriginal":
            return <icons.IftttOriginal size={size}/>
        case "illustratorline":
            return <icons.IllustratorLine size={size}/>
        case "illustratorplain":
            return <icons.IllustratorPlain size={size}/>
        case "influxdboriginalwordmark":
            return <icons.InfluxdbOriginalWordmark size={size}/>
        case "influxdboriginal":
            return <icons.InfluxdbOriginal size={size}/>
        case "inkscapeoriginalwordmark":
            return <icons.InkscapeOriginalWordmark size={size}/>
        case "inkscapeoriginal":
            return <icons.InkscapeOriginal size={size}/>
        case "inkscapeplainwordmark":
            return <icons.InkscapePlainWordmark size={size}/>
        case "inkscapeplain":
            return <icons.InkscapePlain size={size}/>
        case "insomniaoriginalwordmark":
            return <icons.InsomniaOriginalWordmark size={size}/>
        case "insomniaoriginal":
            return <icons.InsomniaOriginal size={size}/>
        case "insomniaplainwordmark":
            return <icons.InsomniaPlainWordmark size={size}/>
        case "insomniaplain":
            return <icons.InsomniaPlain size={size}/>
        case "intellijoriginal":
            return <icons.IntellijOriginal size={size}/>
        case "intellijplainwordmark":
            return <icons.IntellijPlainWordmark size={size}/>
        case "intellijplain":
            return <icons.IntellijPlain size={size}/>
        case "ionicoriginalwordmark":
            return <icons.IonicOriginalWordmark size={size}/>
        case "ionicoriginal":
            return <icons.IonicOriginal size={size}/>
        case "jaegertracingoriginalwordmark":
            return <icons.JaegertracingOriginalWordmark size={size}/>
        case "jaegertracingoriginal":
            return <icons.JaegertracingOriginal size={size}/>
        case "jaegertracingplainwordmark":
            return <icons.JaegertracingPlainWordmark size={size}/>
        case "jaegertracingplain":
            return <icons.JaegertracingPlain size={size}/>
        case "jamstackoriginalwordmark":
            return <icons.JamstackOriginalWordmark size={size}/>
        case "jamstackoriginal":
            return <icons.JamstackOriginal size={size}/>
        case "jamstackplainwordmark":
            return <icons.JamstackPlainWordmark size={size}/>
        case "jasmineoriginalwordmark":
            return <icons.JasmineOriginalWordmark size={size}/>
        case "jasmineoriginal":
            return <icons.JasmineOriginal size={size}/>
        case "javaoriginalwordmark":
            return <icons.JavaOriginalWordmark size={size}/>
        case "javaoriginal":
            return <icons.JavaOriginal size={size}/>
        case "javaplainwordmark":
            return <icons.JavaPlainWordmark size={size}/>
        case "javaplain":
            return <icons.JavaPlain size={size}/>
        case "javascriptoriginal":
            return <icons.JavascriptOriginal size={size}/>
        case "javascriptplain":
            return <icons.JavascriptPlain size={size}/>
        case "jeetoriginalwordmark":
            return <icons.JeetOriginalWordmark size={size}/>
        case "jeetoriginal":
            return <icons.JeetOriginal size={size}/>
        case "jeetplainwordmark":
            return <icons.JeetPlainWordmark size={size}/>
        case "jeetplain":
            return <icons.JeetPlain size={size}/>
        case "jekylloriginalwordmark":
            return <icons.JekyllOriginalWordmark size={size}/>
        case "jekylloriginal":
            return <icons.JekyllOriginal size={size}/>
        case "jekyllplainwordmark":
            return <icons.JekyllPlainWordmark size={size}/>
        case "jekyllplain":
            return <icons.JekyllPlain size={size}/>
        case "jenkinsline":
            return <icons.JenkinsLine size={size}/>
        case "jenkinsoriginal":
            return <icons.JenkinsOriginal size={size}/>
        case "jenkinsplain":
            return <icons.JenkinsPlain size={size}/>
        case "jestplain":
            return <icons.JestPlain size={size}/>
        case "jetbrainsoriginal":
            return <icons.JetbrainsOriginal size={size}/>
        case "jetbrainsplain":
            return <icons.JetbrainsPlain size={size}/>
        case "jetpackcomposelinewordmark":
            return <icons.JetpackcomposeLineWordmark size={size}/>
        case "jetpackcomposeline":
            return <icons.JetpackcomposeLine size={size}/>
        case "jetpackcomposeoriginalwordmark":
            return <icons.JetpackcomposeOriginalWordmark size={size}/>
        case "jetpackcomposeoriginal":
            return <icons.JetpackcomposeOriginal size={size}/>
        case "jetpackcomposeplainwordmark":
            return <icons.JetpackcomposePlainWordmark size={size}/>
        case "jetpackcomposeplain":
            return <icons.JetpackcomposePlain size={size}/>
        case "jiraoriginalwordmark":
            return <icons.JiraOriginalWordmark size={size}/>
        case "jiraoriginal":
            return <icons.JiraOriginal size={size}/>
        case "jiraplainwordmark":
            return <icons.JiraPlainWordmark size={size}/>
        case "jiraplain":
            return <icons.JiraPlain size={size}/>
        case "jiraalignoriginalwordmark":
            return <icons.JiraalignOriginalWordmark size={size}/>
        case "jiraalignoriginal":
            return <icons.JiraalignOriginal size={size}/>
        case "jiraalignplainwordmark":
            return <icons.JiraalignPlainWordmark size={size}/>
        case "jiraalignplain":
            return <icons.JiraalignPlain size={size}/>
        case "jqueryoriginalwordmark":
            return <icons.JqueryOriginalWordmark size={size}/>
        case "jqueryoriginal":
            return <icons.JqueryOriginal size={size}/>
        case "jqueryplainwordmark":
            return <icons.JqueryPlainWordmark size={size}/>
        case "jqueryplain":
            return <icons.JqueryPlain size={size}/>
        case "jsonoriginal":
            return <icons.JsonOriginal size={size}/>
        case "jsonplain":
            return <icons.JsonPlain size={size}/>
        case "juleoriginalwordmark":
            return <icons.JuleOriginalWordmark size={size}/>
        case "juleoriginal":
            return <icons.JuleOriginal size={size}/>
        case "juliaoriginalwordmark":
            return <icons.JuliaOriginalWordmark size={size}/>
        case "juliaoriginal":
            return <icons.JuliaOriginal size={size}/>
        case "juliaplainwordmark":
            return <icons.JuliaPlainWordmark size={size}/>
        case "juliaplain":
            return <icons.JuliaPlain size={size}/>
        case "junitlinewordmark":
            return <icons.JunitLineWordmark size={size}/>
        case "junitline":
            return <icons.JunitLine size={size}/>
        case "junitoriginalwordmark":
            return <icons.JunitOriginalWordmark size={size}/>
        case "junitoriginal":
            return <icons.JunitOriginal size={size}/>
        case "junitplainwordmark":
            return <icons.JunitPlainWordmark size={size}/>
        case "junitplain":
            return <icons.JunitPlain size={size}/>
        case "jupyteroriginalwordmark":
            return <icons.JupyterOriginalWordmark size={size}/>
        case "jupyteroriginal":
            return <icons.JupyterOriginal size={size}/>
        case "jupyterplainwordmark":
            return <icons.JupyterPlainWordmark size={size}/>
        case "jupyterplain":
            return <icons.JupyterPlain size={size}/>
        case "k3oslinewordmark":
            return <icons.K3osLineWordmark size={size}/>
        case "k3osline":
            return <icons.K3osLine size={size}/>
        case "k3osoriginalwordmark":
            return <icons.K3osOriginalWordmark size={size}/>
        case "k3osoriginal":
            return <icons.K3osOriginal size={size}/>
        case "k3osplainwordmark":
            return <icons.K3osPlainWordmark size={size}/>
        case "k3soriginalwordmark":
            return <icons.K3sOriginalWordmark size={size}/>
        case "k3soriginal":
            return <icons.K3sOriginal size={size}/>
        case "k3splainwordmark":
            return <icons.K3sPlainWordmark size={size}/>
        case "k6original":
            return <icons.K6Original size={size}/>
        case "kaggleoriginalwordmark":
            return <icons.KaggleOriginalWordmark size={size}/>
        case "kaggleoriginal":
            return <icons.KaggleOriginal size={size}/>
        case "karatelabsoriginalwordmark":
            return <icons.KaratelabsOriginalWordmark size={size}/>
        case "karatelabsoriginal":
            return <icons.KaratelabsOriginal size={size}/>
        case "karatelabsplainwordmark":
            return <icons.KaratelabsPlainWordmark size={size}/>
        case "karatelabsplain":
            return <icons.KaratelabsPlain size={size}/>
        case "karmaoriginal":
            return <icons.KarmaOriginal size={size}/>
        case "karmaplain":
            return <icons.KarmaPlain size={size}/>
        case "kdeneonoriginal":
            return <icons.KdeneonOriginal size={size}/>
        case "kdeneonplain":
            return <icons.KdeneonPlain size={size}/>
        case "keraslinewordmark":
            return <icons.KerasLineWordmark size={size}/>
        case "kerasline":
            return <icons.KerasLine size={size}/>
        case "kerasoriginalwordmark":
            return <icons.KerasOriginalWordmark size={size}/>
        case "kerasoriginal":
            return <icons.KerasOriginal size={size}/>
        case "kerasplainwordmark":
            return <icons.KerasPlainWordmark size={size}/>
        case "kerasplain":
            return <icons.KerasPlain size={size}/>
        case "kibanaoriginalwordmark":
            return <icons.KibanaOriginalWordmark size={size}/>
        case "kibanaoriginal":
            return <icons.KibanaOriginal size={size}/>
        case "kibanaplainwordmark":
            return <icons.KibanaPlainWordmark size={size}/>
        case "kibanaplain":
            return <icons.KibanaPlain size={size}/>
        case "knexjsoriginalwordmark":
            return <icons.KnexjsOriginalWordmark size={size}/>
        case "knexjsoriginal":
            return <icons.KnexjsOriginal size={size}/>
        case "knexjsplainwordmark":
            return <icons.KnexjsPlainWordmark size={size}/>
        case "knockoutplainwordmark":
            return <icons.KnockoutPlainWordmark size={size}/>
        case "kotlinoriginalwordmark":
            return <icons.KotlinOriginalWordmark size={size}/>
        case "kotlinoriginal":
            return <icons.KotlinOriginal size={size}/>
        case "kotlinplainwordmark":
            return <icons.KotlinPlainWordmark size={size}/>
        case "kotlinplain":
            return <icons.KotlinPlain size={size}/>
        case "krakenjsoriginalwordmark":
            return <icons.KrakenjsOriginalWordmark size={size}/>
        case "krakenjsoriginal":
            return <icons.KrakenjsOriginal size={size}/>
        case "krakenjsplainwordmark":
            return <icons.KrakenjsPlainWordmark size={size}/>
        case "krakenjsplain":
            return <icons.KrakenjsPlain size={size}/>
        case "ktororiginalwordmark":
            return <icons.KtorOriginalWordmark size={size}/>
        case "ktororiginal":
            return <icons.KtorOriginal size={size}/>
        case "ktorplainwordmark":
            return <icons.KtorPlainWordmark size={size}/>
        case "ktorplain":
            return <icons.KtorPlain size={size}/>
        case "embeddedcoriginal":
            return <icons.EmbeddedcOriginal size={size}/>
        case "kubernetesline":
            return <icons.KubernetesLine size={size}/>
        case "kubernetesoriginalwordmark":
            return <icons.KubernetesOriginalWordmark size={size}/>
        case "kubernetesoriginal":
            return <icons.KubernetesOriginal size={size}/>
        case "kubernetesplainwordmark":
            return <icons.KubernetesPlainWordmark size={size}/>
        case "kubernetesplain":
            return <icons.KubernetesPlain size={size}/>
        case "labvieworiginalwordmark":
            return <icons.LabviewOriginalWordmark size={size}/>
        case "labvieworiginal":
            return <icons.LabviewOriginal size={size}/>
        case "labviewplainwordmark":
            return <icons.LabviewPlainWordmark size={size}/>
        case "labviewplain":
            return <icons.LabviewPlain size={size}/>
        case "laravellinewordmark":
            return <icons.LaravelLineWordmark size={size}/>
        case "laravelline":
            return <icons.LaravelLine size={size}/>
        case "laraveloriginalwordmark":
            return <icons.LaravelOriginalWordmark size={size}/>
        case "laraveloriginal":
            return <icons.LaravelOriginal size={size}/>
        case "latexoriginal":
            return <icons.LatexOriginal size={size}/>
        case "lessplainwordmark":
            return <icons.LessPlainWordmark size={size}/>
        case "linkedinoriginalwordmark":
            return <icons.LinkedinOriginalWordmark size={size}/>
        case "linkedinoriginal":
            return <icons.LinkedinOriginal size={size}/>
        case "linkedinplainwordmark":
            return <icons.LinkedinPlainWordmark size={size}/>
        case "linkedinplain":
            return <icons.LinkedinPlain size={size}/>
        case "linuxoriginal":
            return <icons.LinuxOriginal size={size}/>
        case "linuxplain":
            return <icons.LinuxPlain size={size}/>
        case "liquibaseoriginalwordmark":
            return <icons.LiquibaseOriginalWordmark size={size}/>
        case "liquibaseoriginal":
            return <icons.LiquibaseOriginal size={size}/>
        case "livewireoriginalwordmark":
            return <icons.LivewireOriginalWordmark size={size}/>
        case "livewireoriginal":
            return <icons.LivewireOriginal size={size}/>
        case "livewireplainwordmark":
            return <icons.LivewirePlainWordmark size={size}/>
        case "livewireplain":
            return <icons.LivewirePlain size={size}/>
        case "llvmoriginal":
            return <icons.LlvmOriginal size={size}/>
        case "llvmplain":
            return <icons.LlvmPlain size={size}/>
        case "lodashoriginal":
            return <icons.LodashOriginal size={size}/>
        case "lodashplain":
            return <icons.LodashPlain size={size}/>
        case "logstashoriginalwordmark":
            return <icons.LogstashOriginalWordmark size={size}/>
        case "logstashoriginal":
            return <icons.LogstashOriginal size={size}/>
        case "logstashplainwordmark":
            return <icons.LogstashPlainWordmark size={size}/>
        case "logstashplain":
            return <icons.LogstashPlain size={size}/>
        case "lualine":
            return <icons.LuaLine size={size}/>
        case "luaoriginal":
            return <icons.LuaOriginal size={size}/>
        case "luaplain":
            return <icons.LuaPlain size={size}/>
        case "lumenoriginal":
            return <icons.LumenOriginal size={size}/>
        case "magentolinewordmark":
            return <icons.MagentoLineWordmark size={size}/>
        case "magentoline":
            return <icons.MagentoLine size={size}/>
        case "magentooriginalwordmark":
            return <icons.MagentoOriginalWordmark size={size}/>
        case "magentooriginal":
            return <icons.MagentoOriginal size={size}/>
        case "magentoplainwordmark":
            return <icons.MagentoPlainWordmark size={size}/>
        case "mariadboriginalwordmark":
            return <icons.MariadbOriginalWordmark size={size}/>
        case "mariadboriginal":
            return <icons.MariadbOriginal size={size}/>
        case "markdownoriginal":
            return <icons.MarkdownOriginal size={size}/>
        case "materializecssoriginal":
            return <icons.MaterializecssOriginal size={size}/>
        case "materializecssplain":
            return <icons.MaterializecssPlain size={size}/>
        case "materialuioriginal":
            return <icons.MaterialuiOriginal size={size}/>
        case "materialuiplain":
            return <icons.MaterialuiPlain size={size}/>
        case "matlabline":
            return <icons.MatlabLine size={size}/>
        case "matlaboriginal":
            return <icons.MatlabOriginal size={size}/>
        case "matlabplain":
            return <icons.MatlabPlain size={size}/>
        case "matplotliboriginalwordmark":
            return <icons.MatplotlibOriginalWordmark size={size}/>
        case "matplotliboriginal":
            return <icons.MatplotlibOriginal size={size}/>
        case "matplotlibplainwordmark":
            return <icons.MatplotlibPlainWordmark size={size}/>
        case "matplotlibplain":
            return <icons.MatplotlibPlain size={size}/>
        case "mavenoriginalwordmark":
            return <icons.MavenOriginalWordmark size={size}/>
        case "mavenoriginal":
            return <icons.MavenOriginal size={size}/>
        case "mavenplainwordmark":
            return <icons.MavenPlainWordmark size={size}/>
        case "mavenplain":
            return <icons.MavenPlain size={size}/>
        case "mayaoriginalwordmark":
            return <icons.MayaOriginalWordmark size={size}/>
        case "mayaoriginal":
            return <icons.MayaOriginal size={size}/>
        case "mayaplainwordmark":
            return <icons.MayaPlainWordmark size={size}/>
        case "mayaplain":
            return <icons.MayaPlain size={size}/>
        case "meteororiginalwordmark":
            return <icons.MeteorOriginalWordmark size={size}/>
        case "meteororiginal":
            return <icons.MeteorOriginal size={size}/>
        case "meteorplainwordmark":
            return <icons.MeteorPlainWordmark size={size}/>
        case "meteorplain":
            return <icons.MeteorPlain size={size}/>
        case "microsoftsqlserverlinewordmark":
            return <icons.MicrosoftsqlserverLineWordmark size={size}/>
        case "microsoftsqlserverline":
            return <icons.MicrosoftsqlserverLine size={size}/>
        case "microsoftsqlserveroriginalwordmark":
            return <icons.MicrosoftsqlserverOriginalWordmark size={size}/>
        case "microsoftsqlserveroriginal":
            return <icons.MicrosoftsqlserverOriginal size={size}/>
        case "microsoftsqlserverplainwordmark":
            return <icons.MicrosoftsqlserverPlainWordmark size={size}/>
        case "microsoftsqlserverplain":
            return <icons.MicrosoftsqlserverPlain size={size}/>
        case "minitaboriginal":
            return <icons.MinitabOriginal size={size}/>
        case "minitabplain":
            return <icons.MinitabPlain size={size}/>
        case "mithrilline":
            return <icons.MithrilLine size={size}/>
        case "mithriloriginal":
            return <icons.MithrilOriginal size={size}/>
        case "mobxoriginal":
            return <icons.MobxOriginal size={size}/>
        case "mobxplain":
            return <icons.MobxPlain size={size}/>
        case "mochaoriginal":
            return <icons.MochaOriginal size={size}/>
        case "mochaplain":
            return <icons.MochaPlain size={size}/>
        case "modxoriginal":
            return <icons.ModxOriginal size={size}/>
        case "modxplainwordmark":
            return <icons.ModxPlainWordmark size={size}/>
        case "modxplain":
            return <icons.ModxPlain size={size}/>
        case "moleculeroriginalwordmark":
            return <icons.MoleculerOriginalWordmark size={size}/>
        case "moleculeroriginal":
            return <icons.MoleculerOriginal size={size}/>
        case "mongodboriginalwordmark":
            return <icons.MongodbOriginalWordmark size={size}/>
        case "mongodboriginal":
            return <icons.MongodbOriginal size={size}/>
        case "modxoriginalwordmark":
            return <icons.ModxOriginalWordmark size={size}/>
        case "mongodbplainwordmark":
            return <icons.MongodbPlainWordmark size={size}/>
        case "mongodbplain":
            return <icons.MongodbPlain size={size}/>
        case "mongooseoriginalwordmark":
            return <icons.MongooseOriginalWordmark size={size}/>
        case "mongooseoriginal":
            return <icons.MongooseOriginal size={size}/>
        case "moodleoriginalwordmark":
            return <icons.MoodleOriginalWordmark size={size}/>
        case "moodleoriginal":
            return <icons.MoodleOriginal size={size}/>
        case "moodleplainwordmark":
            return <icons.MoodlePlainWordmark size={size}/>
        case "moodleplain":
            return <icons.MoodlePlain size={size}/>
        case "msdosline":
            return <icons.MsdosLine size={size}/>
        case "msdosoriginal":
            return <icons.MsdosOriginal size={size}/>
        case "msdosplain":
            return <icons.MsdosPlain size={size}/>
        case "mysqloriginalwordmark":
            return <icons.MysqlOriginalWordmark size={size}/>
        case "mysqloriginal":
            return <icons.MysqlOriginal size={size}/>
        case "mysqlplainwordmark":
            return <icons.MysqlPlainWordmark size={size}/>
        case "nanooriginalwordmark":
            return <icons.NanoOriginalWordmark size={size}/>
        case "nanooriginal":
            return <icons.NanoOriginal size={size}/>
        case "nanoplainwordmark":
            return <icons.NanoPlainWordmark size={size}/>
        case "nanoplain":
            return <icons.NanoPlain size={size}/>
        case "neo4joriginalwordmark":
            return <icons.Neo4jOriginalWordmark size={size}/>
        case "neo4joriginal":
            return <icons.Neo4jOriginal size={size}/>
        case "neo4jplainwordmark":
            return <icons.Neo4jPlainWordmark size={size}/>
        case "neo4jplain":
            return <icons.Neo4jPlain size={size}/>
        case "neovimlinewordmark":
            return <icons.NeovimLineWordmark size={size}/>
        case "neovimline":
            return <icons.NeovimLine size={size}/>
        case "neovimoriginalwordmark":
            return <icons.NeovimOriginalWordmark size={size}/>
        case "neovimoriginal":
            return <icons.NeovimOriginal size={size}/>
        case "neovimplainwordmark":
            return <icons.NeovimPlainWordmark size={size}/>
        case "neovimplain":
            return <icons.NeovimPlain size={size}/>
        case "nestjslinewordmark":
            return <icons.NestjsLineWordmark size={size}/>
        case "nestjsline":
            return <icons.NestjsLine size={size}/>
        case "nestjsoriginalwordmark":
            return <icons.NestjsOriginalWordmark size={size}/>
        case "nestjsoriginal":
            return <icons.NestjsOriginal size={size}/>
        case "netlifyoriginalwordmark":
            return <icons.NetlifyOriginalWordmark size={size}/>
        case "netlifyoriginal":
            return <icons.NetlifyOriginal size={size}/>
        case "netlifyplainwordmark":
            return <icons.NetlifyPlainWordmark size={size}/>
        case "netlifyplain":
            return <icons.NetlifyPlain size={size}/>
        case "networkxlinewordmark":
            return <icons.NetworkxLineWordmark size={size}/>
        case "networkxline":
            return <icons.NetworkxLine size={size}/>
        case "networkxoriginalwordmark":
            return <icons.NetworkxOriginalWordmark size={size}/>
        case "kuberneteslinewordmark":
            return <icons.KubernetesLineWordmark size={size}/>
        case "dotnetplain":
            return <icons.DotNetPlain size={size}/>
        case "networkxplain":
            return <icons.NetworkxPlain size={size}/>
        case "nextjslinewordmark":
            return <icons.NextjsLineWordmark size={size}/>
        case "nextjsline":
            return <icons.NextjsLine size={size}/>
        case "nextjsoriginalwordmark":
            return <icons.NextjsOriginalWordmark size={size}/>
        case "nextjsoriginal":
            return <icons.NextjsOriginal size={size}/>
        case "nextjsplain":
            return <icons.NextjsPlain size={size}/>
        case "nginxoriginal":
            return <icons.NginxOriginal size={size}/>
        case "ngrxoriginal":
            return <icons.NgrxOriginal size={size}/>
        case "ngrxplain":
            return <icons.NgrxPlain size={size}/>
        case "nhibernatelinewordmark":
            return <icons.NhibernateLineWordmark size={size}/>
        case "nhibernateline":
            return <icons.NhibernateLine size={size}/>
        case "nhibernateoriginalwordmark":
            return <icons.NhibernateOriginalWordmark size={size}/>
        case "nhibernateoriginal":
            return <icons.NhibernateOriginal size={size}/>
        case "nhibernateplainwordmark":
            return <icons.NhibernatePlainWordmark size={size}/>
        case "nhibernateplain":
            return <icons.NhibernatePlain size={size}/>
        case "nimlinewordmark":
            return <icons.NimLineWordmark size={size}/>
        case "nimline":
            return <icons.NimLine size={size}/>
        case "nimoriginalwordmark":
            return <icons.NimOriginalWordmark size={size}/>
        case "nimoriginal":
            return <icons.NimOriginal size={size}/>
        case "nimplainwordmark":
            return <icons.NimPlainWordmark size={size}/>
        case "nimplain":
            return <icons.NimPlain size={size}/>
        case "nimbleoriginal":
            return <icons.NimbleOriginal size={size}/>
        case "nimbleplain":
            return <icons.NimblePlain size={size}/>
        case "nixosoriginalwordmark":
            return <icons.NixosOriginalWordmark size={size}/>
        case "nixosoriginal":
            return <icons.NixosOriginal size={size}/>
        case "nixosplainwordmark":
            return <icons.NixosPlainWordmark size={size}/>
        case "nixosplain":
            return <icons.NixosPlain size={size}/>
        case "nodejslinewordmark":
            return <icons.NodejsLineWordmark size={size}/>
        case "nodejsline":
            return <icons.NodejsLine size={size}/>
        case "nodejsoriginalwordmark":
            return <icons.NodejsOriginalWordmark size={size}/>
        case "nodejsoriginal":
            return <icons.NodejsOriginal size={size}/>
        case "nodejsplainwordmark":
            return <icons.NodejsPlainWordmark size={size}/>
        case "nodejsplain":
            return <icons.NodejsPlain size={size}/>
        case "nodemonline":
            return <icons.NodemonLine size={size}/>
        case "nodemonoriginal":
            return <icons.NodemonOriginal size={size}/>
        case "nuxtjsoriginalwordmark":
            return <icons.NuxtjsOriginalWordmark size={size}/>
        case "nuxtjsoriginal":
            return <icons.NuxtjsOriginal size={size}/>
        case "nuxtjsplainwordmark":
            return <icons.NuxtjsPlainWordmark size={size}/>
        case "nuxtjsplain":
            return <icons.NuxtjsPlain size={size}/>
        case "oauthoriginal":
            return <icons.OauthOriginal size={size}/>
        case "oauthplain":
            return <icons.OauthPlain size={size}/>
        case "objectivecplain":
            return <icons.ObjectivecPlain size={size}/>
        case "ocamloriginalwordmark":
            return <icons.OcamlOriginalWordmark size={size}/>
        case "ocamloriginal":
            return <icons.OcamlOriginal size={size}/>
        case "ocamlplainwordmark":
            return <icons.OcamlPlainWordmark size={size}/>
        case "ocamlplain":
            return <icons.OcamlPlain size={size}/>
        case "ohmyzshoriginal":
            return <icons.OhmyzshOriginal size={size}/>
        case "ohmyzshplain":
            return <icons.OhmyzshPlain size={size}/>
        case "oktaoriginalwordmark":
            return <icons.OktaOriginalWordmark size={size}/>
        case "oktaoriginal":
            return <icons.OktaOriginal size={size}/>
        case "oktaplainwordmark":
            return <icons.OktaPlainWordmark size={size}/>
        case "oktaplain":
            return <icons.OktaPlain size={size}/>
        case "openaloriginal":
            return <icons.OpenalOriginal size={size}/>
        case "openalplain":
            return <icons.OpenalPlain size={size}/>
        case "openapilinewordmark":
            return <icons.OpenapiLineWordmark size={size}/>
        case "openapiline":
            return <icons.OpenapiLine size={size}/>
        case "openapioriginalwordmark":
            return <icons.OpenapiOriginalWordmark size={size}/>
        case "openapioriginal":
            return <icons.OpenapiOriginal size={size}/>
        case "openapiplainwordmark":
            return <icons.OpenapiPlainWordmark size={size}/>
        case "openapiplain":
            return <icons.OpenapiPlain size={size}/>
        case "openclline":
            return <icons.OpenclLine size={size}/>
        case "opencloriginal":
            return <icons.OpenclOriginal size={size}/>
        case "openclplain":
            return <icons.OpenclPlain size={size}/>
        case "opencvoriginalwordmark":
            return <icons.OpencvOriginalWordmark size={size}/>
        case "opencvoriginal":
            return <icons.OpencvOriginal size={size}/>
        case "opencvplainwordmark":
            return <icons.OpencvPlainWordmark size={size}/>
        case "opencvplain":
            return <icons.OpencvPlain size={size}/>
        case "opengloriginal":
            return <icons.OpenglOriginal size={size}/>
        case "openglplain":
            return <icons.OpenglPlain size={size}/>
        case "openstackoriginalwordmark":
            return <icons.OpenstackOriginalWordmark size={size}/>
        case "openstackoriginal":
            return <icons.OpenstackOriginal size={size}/>
        case "openstackplainwordmark":
            return <icons.OpenstackPlainWordmark size={size}/>
        case "opensuseoriginalwordmark":
            return <icons.OpensuseOriginalWordmark size={size}/>
        case "opensuseoriginal":
            return <icons.OpensuseOriginal size={size}/>
        case "opentelemetryoriginalwordmark":
            return <icons.OpentelemetryOriginalWordmark size={size}/>
        case "opentelemetryoriginal":
            return <icons.OpentelemetryOriginal size={size}/>
        case "opentelemetryplainwordmark":
            return <icons.OpentelemetryPlainWordmark size={size}/>
        case "opentelemetryplain":
            return <icons.OpentelemetryPlain size={size}/>
        case "operaoriginalwordmark":
            return <icons.OperaOriginalWordmark size={size}/>
        case "operaoriginal":
            return <icons.OperaOriginal size={size}/>
        case "operaplainwordmark":
            return <icons.OperaPlainWordmark size={size}/>
        case "operaplain":
            return <icons.OperaPlain size={size}/>
        case "oracleoriginal":
            return <icons.OracleOriginal size={size}/>
        case "oryoriginalwordmark":
            return <icons.OryOriginalWordmark size={size}/>
        case "oryoriginal":
            return <icons.OryOriginal size={size}/>
        case "p5jsoriginal":
            return <icons.P5jsOriginal size={size}/>
        case "packerlinewordmark":
            return <icons.PackerLineWordmark size={size}/>
        case "packerline":
            return <icons.PackerLine size={size}/>
        case "packeroriginalwordmark":
            return <icons.PackerOriginalWordmark size={size}/>
        case "packeroriginal":
            return <icons.PackerOriginal size={size}/>
        case "packerplainwordmark":
            return <icons.PackerPlainWordmark size={size}/>
        case "packerplain":
            return <icons.PackerPlain size={size}/>
        case "pandaslinewordmark":
            return <icons.PandasLineWordmark size={size}/>
        case "pandasline":
            return <icons.PandasLine size={size}/>
        case "pandasoriginalwordmark":
            return <icons.PandasOriginalWordmark size={size}/>
        case "pandasoriginal":
            return <icons.PandasOriginal size={size}/>
        case "pandasplainwordmark":
            return <icons.PandasPlainWordmark size={size}/>
        case "pandasplain":
            return <icons.PandasPlain size={size}/>
        case "perloriginal":
            return <icons.PerlOriginal size={size}/>
        case "perlplain":
            return <icons.PerlPlain size={size}/>
        case "pfsenseoriginalwordmark":
            return <icons.PfsenseOriginalWordmark size={size}/>
        case "pfsenseoriginal":
            return <icons.PfsenseOriginal size={size}/>
        case "phalconoriginal":
            return <icons.PhalconOriginal size={size}/>
        case "phalconplain":
            return <icons.PhalconPlain size={size}/>
        case "phoenixoriginalwordmark":
            return <icons.PhoenixOriginalWordmark size={size}/>
        case "phoenixoriginal":
            return <icons.PhoenixOriginal size={size}/>
        case "phoenixplainwordmark":
            return <icons.PhoenixPlainWordmark size={size}/>
        case "photonengineoriginal":
            return <icons.PhotonengineOriginal size={size}/>
        case "photonengineplain":
            return <icons.PhotonenginePlain size={size}/>
        case "photoshopline":
            return <icons.PhotoshopLine size={size}/>
        case "photoshoporiginal":
            return <icons.PhotoshopOriginal size={size}/>
        case "photoshopplain":
            return <icons.PhotoshopPlain size={size}/>
        case "phporiginal":
            return <icons.PhpOriginal size={size}/>
        case "phpplain":
            return <icons.PhpPlain size={size}/>
        case "phpstormoriginal":
            return <icons.PhpstormOriginal size={size}/>
        case "phpstormplainwordmark":
            return <icons.PhpstormPlainWordmark size={size}/>
        case "phpstormplain":
            return <icons.PhpstormPlain size={size}/>
        case "playwrightoriginal":
            return <icons.PlaywrightOriginal size={size}/>
        case "playwrightplain":
            return <icons.PlaywrightPlain size={size}/>
        case "plotlyoriginalwordmark":
            return <icons.PlotlyOriginalWordmark size={size}/>
        case "plotlyoriginal":
            return <icons.PlotlyOriginal size={size}/>
        case "plotlyplainwordmark":
            return <icons.PlotlyPlainWordmark size={size}/>
        case "plotlyplain":
            return <icons.PlotlyPlain size={size}/>
        case "pnpmoriginalwordmark":
            return <icons.PnpmOriginalWordmark size={size}/>
        case "pnpmoriginal":
            return <icons.PnpmOriginal size={size}/>
        case "pnpmplainwordmark":
            return <icons.PnpmPlainWordmark size={size}/>
        case "pnpmplain":
            return <icons.PnpmPlain size={size}/>
        case "podmanoriginalwordmark":
            return <icons.PodmanOriginalWordmark size={size}/>
        case "podmanoriginal":
            return <icons.PodmanOriginal size={size}/>
        case "podmanplainwordmark":
            return <icons.PodmanPlainWordmark size={size}/>
        case "podmanplain":
            return <icons.PodmanPlain size={size}/>
        case "poetryoriginal":
            return <icons.PoetryOriginal size={size}/>
        case "poetryplain":
            return <icons.PoetryPlain size={size}/>
        case "polygonoriginalwordmark":
            return <icons.PolygonOriginalWordmark size={size}/>
        case "polygonoriginal":
            return <icons.PolygonOriginal size={size}/>
        case "polygonplainwordmark":
            return <icons.PolygonPlainWordmark size={size}/>
        case "polygonplain":
            return <icons.PolygonPlain size={size}/>
        case "portaineroriginalwordmark":
            return <icons.PortainerOriginalWordmark size={size}/>
        case "portaineroriginal":
            return <icons.PortainerOriginal size={size}/>
        case "postcssoriginalwordmark":
            return <icons.PostcssOriginalWordmark size={size}/>
        case "postcssoriginal":
            return <icons.PostcssOriginal size={size}/>
        case "postcssplainwordmark":
            return <icons.PostcssPlainWordmark size={size}/>
        case "postgresqloriginalwordmark":
            return <icons.PostgresqlOriginalWordmark size={size}/>
        case "postgresqloriginal":
            return <icons.PostgresqlOriginal size={size}/>
        case "postgresqlplainwordmark":
            return <icons.PostgresqlPlainWordmark size={size}/>
        case "postgresqlplain":
            return <icons.PostgresqlPlain size={size}/>
        case "postmanoriginalwordmark":
            return <icons.PostmanOriginalWordmark size={size}/>
        case "postmanoriginal":
            return <icons.PostmanOriginal size={size}/>
        case "postmanplainwordmark":
            return <icons.PostmanPlainWordmark size={size}/>
        case "bitbucketoriginalwordmark":
            return <icons.BitbucketOriginalWordmark size={size}/>
        case "powershelloriginal":
            return <icons.PowershellOriginal size={size}/>
        case "powershellplain":
            return <icons.PowershellPlain size={size}/>
        case "premiereprooriginal":
            return <icons.PremiereproOriginal size={size}/>
        case "premiereproplain":
            return <icons.PremiereproPlain size={size}/>
        case "prismaoriginalwordmark":
            return <icons.PrismaOriginalWordmark size={size}/>
        case "prismaoriginal":
            return <icons.PrismaOriginal size={size}/>
        case "processingoriginalwordmark":
            return <icons.ProcessingOriginalWordmark size={size}/>
        case "processingoriginal":
            return <icons.ProcessingOriginal size={size}/>
        case "processingplainwordmark":
            return <icons.ProcessingPlainWordmark size={size}/>
        case "processingplain":
            return <icons.ProcessingPlain size={size}/>
        case "prologoriginalwordmark":
            return <icons.PrologOriginalWordmark size={size}/>
        case "prologoriginal":
            return <icons.PrologOriginal size={size}/>
        case "prologplainwordmark":
            return <icons.PrologPlainWordmark size={size}/>
        case "prologplain":
            return <icons.PrologPlain size={size}/>
        case "prometheuslinewordmark":
            return <icons.PrometheusLineWordmark size={size}/>
        case "prometheusline":
            return <icons.PrometheusLine size={size}/>
        case "prometheusoriginalwordmark":
            return <icons.PrometheusOriginalWordmark size={size}/>
        case "prometheusoriginal":
            return <icons.PrometheusOriginal size={size}/>
        case "prometheusplainwordmark":
            return <icons.PrometheusPlainWordmark size={size}/>
        case "protractorlinewordmark":
            return <icons.ProtractorLineWordmark size={size}/>
        case "protractorline":
            return <icons.ProtractorLine size={size}/>
        case "protractororiginalwordmark":
            return <icons.ProtractorOriginalWordmark size={size}/>
        case "protractororiginal":
            return <icons.ProtractorOriginal size={size}/>
        case "protractorplainwordmark":
            return <icons.ProtractorPlainWordmark size={size}/>
        case "protractorplain":
            return <icons.ProtractorPlain size={size}/>
        case "pulsaroriginalwordmark":
            return <icons.PulsarOriginalWordmark size={size}/>
        case "pulsaroriginal":
            return <icons.PulsarOriginal size={size}/>
        case "pulumioriginalwordmark":
            return <icons.PulumiOriginalWordmark size={size}/>
        case "pulumioriginal":
            return <icons.PulumiOriginal size={size}/>
        case "pulumiplainwordmark":
            return <icons.PulumiPlainWordmark size={size}/>
        case "pulumiplain":
            return <icons.PulumiPlain size={size}/>
        case "puppeteeroriginal":
            return <icons.PuppeteerOriginal size={size}/>
        case "puppeteerplain":
            return <icons.PuppeteerPlain size={size}/>
        case "purescriptoriginalwordmark":
            return <icons.PurescriptOriginalWordmark size={size}/>
        case "purescriptoriginal":
            return <icons.PurescriptOriginal size={size}/>
        case "puttyoriginal":
            return <icons.PuttyOriginal size={size}/>
        case "puttyplain":
            return <icons.PuttyPlain size={size}/>
        case "pycharmoriginalwordmark":
            return <icons.PycharmOriginalWordmark size={size}/>
        case "pycharmoriginal":
            return <icons.PycharmOriginal size={size}/>
        case "pycharmplainwordmark":
            return <icons.PycharmPlainWordmark size={size}/>
        case "pycharmplain":
            return <icons.PycharmPlain size={size}/>
        case "pypioriginalwordmark":
            return <icons.PypiOriginalWordmark size={size}/>
        case "pypioriginal":
            return <icons.PypiOriginal size={size}/>
        case "pypiplainwordmark":
            return <icons.PypiPlainWordmark size={size}/>
        case "pypiplain":
            return <icons.PypiPlain size={size}/>
        case "pyscriptoriginalwordmark":
            return <icons.PyscriptOriginalWordmark size={size}/>
        case "pyscriptplainwordmark":
            return <icons.PyscriptPlainWordmark size={size}/>
        case "pytestoriginalwordmark":
            return <icons.PytestOriginalWordmark size={size}/>
        case "pytestoriginal":
            return <icons.PytestOriginal size={size}/>
        case "pytestplainwordmark":
            return <icons.PytestPlainWordmark size={size}/>
        case "pytestplain":
            return <icons.PytestPlain size={size}/>
        case "pythonoriginalwordmark":
            return <icons.PythonOriginalWordmark size={size}/>
        case "pythonoriginal":
            return <icons.PythonOriginal size={size}/>
        case "pythonplainwordmark":
            return <icons.PythonPlainWordmark size={size}/>
        case "pythonplain":
            return <icons.PythonPlain size={size}/>
        case "pytorchoriginalwordmark":
            return <icons.PytorchOriginalWordmark size={size}/>
        case "pytorchoriginal":
            return <icons.PytorchOriginal size={size}/>
        case "pytorchplainwordmark":
            return <icons.PytorchPlainWordmark size={size}/>
        case "qodanaoriginal":
            return <icons.QodanaOriginal size={size}/>
        case "qodanaplainwordmark":
            return <icons.QodanaPlainWordmark size={size}/>
        case "solidityplain":
            return <icons.SolidityPlain size={size}/>
        case "solidjsoriginalwordmark":
            return <icons.SolidjsOriginalWordmark size={size}/>
        case "solidjsoriginal":
            return <icons.SolidjsOriginal size={size}/>
        case "solidjsplainwordmark":
            return <icons.SolidjsPlainWordmark size={size}/>
        case "solidjsplain":
            return <icons.SolidjsPlain size={size}/>
        case "sonarqubelinewordmark":
            return <icons.SonarqubeLineWordmark size={size}/>
        case "sonarqubeline":
            return <icons.SonarqubeLine size={size}/>
        case "sonarqubeoriginalwordmark":
            return <icons.SonarqubeOriginalWordmark size={size}/>
        case "sonarqubeoriginal":
            return <icons.SonarqubeOriginal size={size}/>
        case "sonarqubeplainwordmark":
            return <icons.SonarqubePlainWordmark size={size}/>
        case "sourcetreeoriginalwordmark":
            return <icons.SourcetreeOriginalWordmark size={size}/>
        case "sourcetreeoriginal":
            return <icons.SourcetreeOriginal size={size}/>
        case "spackoriginal":
            return <icons.SpackOriginal size={size}/>
        case "spackplain":
            return <icons.SpackPlain size={size}/>
        case "splunkoriginalwordmark":
            return <icons.SplunkOriginalWordmark size={size}/>
        case "springoriginalwordmark":
            return <icons.SpringOriginalWordmark size={size}/>
        case "springoriginal":
            return <icons.SpringOriginal size={size}/>
        case "spssoriginal":
            return <icons.SpssOriginal size={size}/>
        case "spssplain":
            return <icons.SpssPlain size={size}/>
        case "spyderoriginalwordmark":
            return <icons.SpyderOriginalWordmark size={size}/>
        case "spyderoriginal":
            return <icons.SpyderOriginal size={size}/>
        case "spyderplainwordmark":
            return <icons.SpyderPlainWordmark size={size}/>
        case "spyderplain":
            return <icons.SpyderPlain size={size}/>
        case "sqlalchemyoriginalwordmark":
            return <icons.SqlalchemyOriginalWordmark size={size}/>
        case "sqlalchemyoriginal":
            return <icons.SqlalchemyOriginal size={size}/>
        case "sqlalchemyplainwordmark":
            return <icons.SqlalchemyPlainWordmark size={size}/>
        case "sqlalchemyplain":
            return <icons.SqlalchemyPlain size={size}/>
        case "sqldeveloperoriginal":
            return <icons.SqldeveloperOriginal size={size}/>
        case "sqldeveloperplain":
            return <icons.SqldeveloperPlain size={size}/>
        case "sqliteoriginalwordmark":
            return <icons.SqliteOriginalWordmark size={size}/>
        case "sqliteoriginal":
            return <icons.SqliteOriginal size={size}/>
        case "sqliteplainwordmark":
            return <icons.SqlitePlainWordmark size={size}/>
        case "sqliteplain":
            return <icons.SqlitePlain size={size}/>
        case "sshoriginalwordmark":
            return <icons.SshOriginalWordmark size={size}/>
        case "sshoriginal":
            return <icons.SshOriginal size={size}/>
        case "stackoverflowlinewordmark":
            return <icons.StackoverflowLineWordmark size={size}/>
        case "stackoverflowline":
            return <icons.StackoverflowLine size={size}/>
        case "stackoverfloworiginalwordmark":
            return <icons.StackoverflowOriginalWordmark size={size}/>
        case "stackoverfloworiginal":
            return <icons.StackoverflowOriginal size={size}/>
        case "stackoverflowplainwordmark":
            return <icons.StackoverflowPlainWordmark size={size}/>
        case "stackoverflowplain":
            return <icons.StackoverflowPlain size={size}/>
        case "stataoriginalwordmark":
            return <icons.StataOriginalWordmark size={size}/>
        case "storybookoriginalwordmark":
            return <icons.StorybookOriginalWordmark size={size}/>
        case "storybookoriginal":
            return <icons.StorybookOriginal size={size}/>
        case "storybookplainwordmark":
            return <icons.StorybookPlainWordmark size={size}/>
        case "storybookplain":
            return <icons.StorybookPlain size={size}/>
        case "streamlitoriginalwordmark":
            return <icons.StreamlitOriginalWordmark size={size}/>
        case "streamlitoriginal":
            return <icons.StreamlitOriginal size={size}/>
        case "streamlitplainwordmark":
            return <icons.StreamlitPlainWordmark size={size}/>
        case "streamlitplain":
            return <icons.StreamlitPlain size={size}/>
        case "stylusoriginal":
            return <icons.StylusOriginal size={size}/>
        case "subversionoriginalwordmark":
            return <icons.SubversionOriginalWordmark size={size}/>
        case "subversionoriginal":
            return <icons.SubversionOriginal size={size}/>
        case "subversionplainwordmark":
            return <icons.SubversionPlainWordmark size={size}/>
        case "supabaseoriginalwordmark":
            return <icons.SupabaseOriginalWordmark size={size}/>
        case "supabaseoriginal":
            return <icons.SupabaseOriginal size={size}/>
        case "supabaseplainwordmark":
            return <icons.SupabasePlainWordmark size={size}/>
        case "supabaseplain":
            return <icons.SupabasePlain size={size}/>
        case "svelteoriginalwordmark":
            return <icons.SvelteOriginalWordmark size={size}/>
        case "svelteoriginal":
            return <icons.SvelteOriginal size={size}/>
        case "svelteplainwordmark":
            return <icons.SveltePlainWordmark size={size}/>
        case "svelteplain":
            return <icons.SveltePlain size={size}/>
        case "swaggeroriginalwordmark":
            return <icons.SwaggerOriginalWordmark size={size}/>
        case "swaggeroriginal":
            return <icons.SwaggerOriginal size={size}/>
        case "swaggerplainwordmark":
            return <icons.SwaggerPlainWordmark size={size}/>
        case "swaggerplain":
            return <icons.SwaggerPlain size={size}/>
        case "swiftoriginalwordmark":
            return <icons.SwiftOriginalWordmark size={size}/>
        case "swiftoriginal":
            return <icons.SwiftOriginal size={size}/>
        case "swiftplainwordmark":
            return <icons.SwiftPlainWordmark size={size}/>
        case "swiftplain":
            return <icons.SwiftPlain size={size}/>
        case "swiperoriginal":
            return <icons.SwiperOriginal size={size}/>
        case "symfonyoriginalwordmark":
            return <icons.SymfonyOriginalWordmark size={size}/>
        case "symfonyoriginal":
            return <icons.SymfonyOriginal size={size}/>
        case "tailwindcssoriginalwordmark":
            return <icons.TailwindcssOriginalWordmark size={size}/>
        case "tailwindcssoriginal":
            return <icons.TailwindcssOriginal size={size}/>
        case "tailwindcssplainwordmark":
            return <icons.TailwindcssPlainWordmark size={size}/>
        case "taurioriginalwordmark":
            return <icons.TauriOriginalWordmark size={size}/>
        case "taurioriginal":
            return <icons.TauriOriginal size={size}/>
        case "tauriplainwordmark":
            return <icons.TauriPlainWordmark size={size}/>
        case "tauriplain":
            return <icons.TauriPlain size={size}/>
        case "tensorflowlinewordmark":
            return <icons.TensorflowLineWordmark size={size}/>
        case "tensorflowline":
            return <icons.TensorflowLine size={size}/>
        case "tensorfloworiginalwordmark":
            return <icons.TensorflowOriginalWordmark size={size}/>
        case "tensorfloworiginal":
            return <icons.TensorflowOriginal size={size}/>
        case "terraformoriginalwordmark":
            return <icons.TerraformOriginalWordmark size={size}/>
        case "terraformoriginal":
            return <icons.TerraformOriginal size={size}/>
        case "terraformplainwordmark":
            return <icons.TerraformPlainWordmark size={size}/>
        case "terraformplain":
            return <icons.TerraformPlain size={size}/>
        case "texoriginal":
            return <icons.TexOriginal size={size}/>
        case "thealgorithmsoriginalwordmark":
            return <icons.ThealgorithmsOriginalWordmark size={size}/>
        case "thealgorithmsoriginal":
            return <icons.ThealgorithmsOriginal size={size}/>
        case "thealgorithmsplainwordmark":
            return <icons.ThealgorithmsPlainWordmark size={size}/>
        case "thealgorithmsplain":
            return <icons.ThealgorithmsPlain size={size}/>
        case "threedsmaxoriginal":
            return <icons.ThreedsmaxOriginal size={size}/>
        case "threedsmaxplain":
            return <icons.ThreedsmaxPlain size={size}/>
        case "threejsoriginalwordmark":
            return <icons.ThreejsOriginalWordmark size={size}/>
        case "threejsoriginal":
            return <icons.ThreejsOriginal size={size}/>
        case "titaniumsdkoriginal":
            return <icons.TitaniumsdkOriginal size={size}/>
        case "tomcatlinewordmark":
            return <icons.TomcatLineWordmark size={size}/>
        case "tomcatline":
            return <icons.TomcatLine size={size}/>
        case "tomcatoriginalwordmark":
            return <icons.TomcatOriginalWordmark size={size}/>
        case "tomcatoriginal":
            return <icons.TomcatOriginal size={size}/>
        case "tortoisegitline":
            return <icons.TortoisegitLine size={size}/>
        case "tortoisegitoriginal":
            return <icons.TortoisegitOriginal size={size}/>
        case "tortoisegitplain":
            return <icons.TortoisegitPlain size={size}/>
        case "towergitoriginalwordmark":
            return <icons.TowergitOriginalWordmark size={size}/>
        case "towergitoriginal":
            return <icons.TowergitOriginal size={size}/>
        case "towergitplainwordmark":
            return <icons.TowergitPlainWordmark size={size}/>
        case "towergitplain":
            return <icons.TowergitPlain size={size}/>
        case "traefikmeshlinewordmark":
            return <icons.TraefikmeshLineWordmark size={size}/>
        case "traefikmeshline":
            return <icons.TraefikmeshLine size={size}/>
        case "traefikmeshoriginalwordmark":
            return <icons.TraefikmeshOriginalWordmark size={size}/>
        case "traefikmeshoriginal":
            return <icons.TraefikmeshOriginal size={size}/>
        case "traefikmeshplainwordmark":
            return <icons.TraefikmeshPlainWordmark size={size}/>
        case "traefikproxylinewordmark":
            return <icons.TraefikproxyLineWordmark size={size}/>
        case "traefikproxyline":
            return <icons.TraefikproxyLine size={size}/>
        case "traefikproxyoriginalwordmark":
            return <icons.TraefikproxyOriginalWordmark size={size}/>
        case "traefikproxyoriginal":
            return <icons.TraefikproxyOriginal size={size}/>
        case "traefikproxyplainwordmark":
            return <icons.TraefikproxyPlainWordmark size={size}/>
        case "travislinewordmark":
            return <icons.TravisLineWordmark size={size}/>
        case "travisline":
            return <icons.TravisLine size={size}/>
        case "travisoriginalwordmark":
            return <icons.TravisOriginalWordmark size={size}/>
        case "travisoriginal":
            return <icons.TravisOriginal size={size}/>
        case "travisplainwordmark":
            return <icons.TravisPlainWordmark size={size}/>
        case "travisplain":
            return <icons.TravisPlain size={size}/>
        case "trellolinewordmark":
            return <icons.TrelloLineWordmark size={size}/>
        case "trelloline":
            return <icons.TrelloLine size={size}/>
        case "trellooriginalwordmark":
            return <icons.TrelloOriginalWordmark size={size}/>
        case "trellooriginal":
            return <icons.TrelloOriginal size={size}/>
        case "trelloplainwordmark":
            return <icons.TrelloPlainWordmark size={size}/>
        case "trelloplain":
            return <icons.TrelloPlain size={size}/>
        case "trpcoriginalwordmark":
            return <icons.TrpcOriginalWordmark size={size}/>
        case "trpcoriginal":
            return <icons.TrpcOriginal size={size}/>
        case "trpcplainwordmark":
            return <icons.TrpcPlainWordmark size={size}/>
        case "trpcplain":
            return <icons.TrpcPlain size={size}/>
        case "twitteroriginal":
            return <icons.TwitterOriginal size={size}/>
        case "typescriptoriginal":
            return <icons.TypescriptOriginal size={size}/>
        case "typescriptplain":
            return <icons.TypescriptPlain size={size}/>
        case "typo3linewordmark":
            return <icons.Typo3LineWordmark size={size}/>
        case "typo3line":
            return <icons.Typo3Line size={size}/>
        case "typo3originalwordmark":
            return <icons.Typo3OriginalWordmark size={size}/>
        case "typo3original":
            return <icons.Typo3Original size={size}/>
        case "typo3plainwordmark":
            return <icons.Typo3PlainWordmark size={size}/>
        case "ubuntuoriginalwordmark":
            return <icons.UbuntuOriginalWordmark size={size}/>
        case "ubuntuoriginal":
            return <icons.UbuntuOriginal size={size}/>
        case "ubuntuplainwordmark":
            return <icons.UbuntuPlainWordmark size={size}/>
        case "ubuntuplain":
            return <icons.UbuntuPlain size={size}/>
        case "unifiedmodelinglanguageoriginalwordmark":
            return <icons.UnifiedmodelinglanguageOriginalWordmark size={size}/>
        case "unifiedmodelinglanguageoriginal":
            return <icons.UnifiedmodelinglanguageOriginal size={size}/>
        case "unifiedmodelinglanguageplainwordmark":
            return <icons.UnifiedmodelinglanguagePlainWordmark size={size}/>
        case "unifiedmodelinglanguageplain":
            return <icons.UnifiedmodelinglanguagePlain size={size}/>
        case "unitylinewordmark":
            return <icons.UnityLineWordmark size={size}/>
        case "unityline":
            return <icons.UnityLine size={size}/>
        case "unityoriginalwordmark":
            return <icons.UnityOriginalWordmark size={size}/>
        case "unityoriginal":
            return <icons.UnityOriginal size={size}/>
        case "unityplainwordmark":
            return <icons.UnityPlainWordmark size={size}/>
        case "unityplain":
            return <icons.UnityPlain size={size}/>
        case "unixoriginal":
            return <icons.UnixOriginal size={size}/>
        case "unrealengineoriginalwordmark":
            return <icons.UnrealengineOriginalWordmark size={size}/>
        case "unrealengineoriginal":
            return <icons.UnrealengineOriginal size={size}/>
        case "uwsgioriginal":
            return <icons.UwsgiOriginal size={size}/>
        case "uwsgiplain":
            return <icons.UwsgiPlain size={size}/>
        case "v8original":
            return <icons.V8Original size={size}/>
        case "v8plain":
            return <icons.V8Plain size={size}/>
        case "vagrantoriginalwordmark":
            return <icons.VagrantOriginalWordmark size={size}/>
        case "vagrantoriginal":
            return <icons.VagrantOriginal size={size}/>
        case "vagrantplainwordmark":
            return <icons.VagrantPlainWordmark size={size}/>
        case "vagrantplain":
            return <icons.VagrantPlain size={size}/>
        case "valaoriginalwordmark":
            return <icons.ValaOriginalWordmark size={size}/>
        case "valaoriginal":
            return <icons.ValaOriginal size={size}/>
        case "valaplainwordmark":
            return <icons.ValaPlainWordmark size={size}/>
        case "valaplain":
            return <icons.ValaPlain size={size}/>
        case "vaultoriginalwordmark":
            return <icons.VaultOriginalWordmark size={size}/>
        case "vaultoriginal":
            return <icons.VaultOriginal size={size}/>
        case "vaultplainwordmark":
            return <icons.VaultPlainWordmark size={size}/>
        case "vercellinewordmark":
            return <icons.VercelLineWordmark size={size}/>
        case "vercelline":
            return <icons.VercelLine size={size}/>
        case "verceloriginalwordmark":
            return <icons.VercelOriginalWordmark size={size}/>
        case "verceloriginal":
            return <icons.VercelOriginal size={size}/>
        case "vertxlinewordmark":
            return <icons.VertxLineWordmark size={size}/>
        case "vertxline":
            return <icons.VertxLine size={size}/>
        case "vertxoriginalwordmark":
            return <icons.VertxOriginalWordmark size={size}/>
        case "vertxoriginal":
            return <icons.VertxOriginal size={size}/>
        case "vertxplainwordmark":
            return <icons.VertxPlainWordmark size={size}/>
        case "vertxplain":
            return <icons.VertxPlain size={size}/>
        case "vimoriginal":
            return <icons.VimOriginal size={size}/>
        case "vimplain":
            return <icons.VimPlain size={size}/>
        case "visualbasicline":
            return <icons.VisualbasicLine size={size}/>
        case "visualbasicoriginal":
            return <icons.VisualbasicOriginal size={size}/>
        case "visualbasicplain":
            return <icons.VisualbasicPlain size={size}/>
        case "visualstudiolinewordmark":
            return <icons.VisualstudioLineWordmark size={size}/>
        case "visualstudioline":
            return <icons.VisualstudioLine size={size}/>
        case "visualstudiooriginalwordmark":
            return <icons.VisualstudioOriginalWordmark size={size}/>
        case "visualstudiooriginal":
            return <icons.VisualstudioOriginal size={size}/>
        case "visualstudioplainwordmark":
            return <icons.VisualstudioPlainWordmark size={size}/>
        case "visualstudioplain":
            return <icons.VisualstudioPlain size={size}/>
        case "viteoriginalwordmark":
            return <icons.ViteOriginalWordmark size={size}/>
        case "viteoriginal":
            return <icons.ViteOriginal size={size}/>
        case "vitejsoriginal":
            return <icons.VitejsOriginal size={size}/>
        case "vitejsplain":
            return <icons.VitejsPlain size={size}/>
        case "vitessoriginalwordmark":
            return <icons.VitessOriginalWordmark size={size}/>
        case "vitessoriginal":
            return <icons.VitessOriginal size={size}/>
        case "vitessplainwordmark":
            return <icons.VitessPlainWordmark size={size}/>
        case "vitessplain":
            return <icons.VitessPlain size={size}/>
        case "vitestoriginal":
            return <icons.VitestOriginal size={size}/>
        case "vitestplain":
            return <icons.VitestPlain size={size}/>
        case "vscodeoriginalwordmark":
            return <icons.VscodeOriginalWordmark size={size}/>
        case "vscodeoriginal":
            return <icons.VscodeOriginal size={size}/>
        case "vscodeplainwordmark":
            return <icons.VscodePlainWordmark size={size}/>
        case "vscodeplain":
            return <icons.VscodePlain size={size}/>
        case "vspherelinewordmark":
            return <icons.VsphereLineWordmark size={size}/>
        case "vsphereline":
            return <icons.VsphereLine size={size}/>
        case "vsphereoriginalwordmark":
            return <icons.VsphereOriginalWordmark size={size}/>
        case "vsphereoriginal":
            return <icons.VsphereOriginal size={size}/>
        case "vsphereplainwordmark":
            return <icons.VspherePlainWordmark size={size}/>
        case "vsphereplain":
            return <icons.VspherePlain size={size}/>
        case "vuejslinewordmark":
            return <icons.VuejsLineWordmark size={size}/>
        case "vuejsline":
            return <icons.VuejsLine size={size}/>
        case "vuejsoriginalwordmark":
            return <icons.VuejsOriginalWordmark size={size}/>
        case "vuejsoriginal":
            return <icons.VuejsOriginal size={size}/>
        case "vuejsplainwordmark":
            return <icons.VuejsPlainWordmark size={size}/>
        case "vuejsplain":
            return <icons.VuejsPlain size={size}/>
        case "vuestorefrontoriginal":
            return <icons.VuestorefrontOriginal size={size}/>
        case "vuestorefrontplain":
            return <icons.VuestorefrontPlain size={size}/>
        case "vuetifyline":
            return <icons.VuetifyLine size={size}/>
        case "vuetifyoriginal":
            return <icons.VuetifyOriginal size={size}/>
        case "vuetifyplain":
            return <icons.VuetifyPlain size={size}/>
        case "vyperoriginalwordmark":
            return <icons.VyperOriginalWordmark size={size}/>
        case "vyperoriginal":
            return <icons.VyperOriginal size={size}/>
        case "vyperplainwordmark":
            return <icons.VyperPlainWordmark size={size}/>
        case "vyperplain":
            return <icons.VyperPlain size={size}/>
        case "wasmoriginalwordmark":
            return <icons.WasmOriginalWordmark size={size}/>
        case "wasmoriginal":
            return <icons.WasmOriginal size={size}/>
        case "wasmplainwordmark":
            return <icons.WasmPlainWordmark size={size}/>
        case "webfloworiginal":
            return <icons.WebflowOriginal size={size}/>
        case "weblateoriginalwordmark":
            return <icons.WeblateOriginalWordmark size={size}/>
        case "weblateoriginal":
            return <icons.WeblateOriginal size={size}/>
        case "weblateplainwordmark":
            return <icons.WeblatePlainWordmark size={size}/>
        case "weblateplain":
            return <icons.WeblatePlain size={size}/>
        case "webpackoriginalwordmark":
            return <icons.WebpackOriginalWordmark size={size}/>
        case "webpackoriginal":
            return <icons.WebpackOriginal size={size}/>
        case "webpackplainwordmark":
            return <icons.WebpackPlainWordmark size={size}/>
        case "webpackplain":
            return <icons.WebpackPlain size={size}/>
        case "webstormoriginalwordmark":
            return <icons.WebstormOriginalWordmark size={size}/>
        case "webstormoriginal":
            return <icons.WebstormOriginal size={size}/>
        case "webstormplainwordmark":
            return <icons.WebstormPlainWordmark size={size}/>
        case "webstormplain":
            return <icons.WebstormPlain size={size}/>
        case "windows11originalwordmark":
            return <icons.Windows11OriginalWordmark size={size}/>
        case "windows11original":
            return <icons.Windows11Original size={size}/>
        case "windows8originalwordmark":
            return <icons.Windows8OriginalWordmark size={size}/>
        case "windows8original":
            return <icons.Windows8Original size={size}/>
        case "woocommerceoriginalwordmark":
            return <icons.WoocommerceOriginalWordmark size={size}/>
        case "woocommerceoriginal":
            return <icons.WoocommerceOriginal size={size}/>
        case "woocommerceplainwordmark":
            return <icons.WoocommercePlainWordmark size={size}/>
        case "woocommerceplain":
            return <icons.WoocommercePlain size={size}/>
        case "wordpressoriginal":
            return <icons.WordpressOriginal size={size}/>
        case "wordpressplainwordmark":
            return <icons.WordpressPlainWordmark size={size}/>
        case "wordpressplain":
            return <icons.WordpressPlain size={size}/>
        case "xamarinoriginalwordmark":
            return <icons.XamarinOriginalWordmark size={size}/>
        case "xamarinoriginal":
            return <icons.XamarinOriginal size={size}/>
        case "xcodeoriginal":
            return <icons.XcodeOriginal size={size}/>
        case "xcodeplain":
            return <icons.XcodePlain size={size}/>
        case "xdline":
            return <icons.XdLine size={size}/>
        case "xdoriginal":
            return <icons.XdOriginal size={size}/>
        case "xdplain":
            return <icons.XdPlain size={size}/>
        case "xmlline":
            return <icons.XmlLine size={size}/>
        case "xmloriginal":
            return <icons.XmlOriginal size={size}/>
        case "xmlplain":
            return <icons.XmlPlain size={size}/>
        case "yamloriginal":
            return <icons.YamlOriginal size={size}/>
        case "yamlplain":
            return <icons.YamlPlain size={size}/>
        case "yarnlinewordmark":
            return <icons.YarnLineWordmark size={size}/>
        case "yarnline":
            return <icons.YarnLine size={size}/>
        case "yarnoriginalwordmark":
            return <icons.YarnOriginalWordmark size={size}/>
        case "yarnoriginal":
            return <icons.YarnOriginal size={size}/>
        case "yiioriginalwordmark":
            return <icons.YiiOriginalWordmark size={size}/>
        case "yiioriginal":
            return <icons.YiiOriginal size={size}/>
        case "yiiplainwordmark":
            return <icons.YiiPlainWordmark size={size}/>
        case "yiiplain":
            return <icons.YiiPlain size={size}/>
        case "yugabytedboriginalwordmark":
            return <icons.YugabytedbOriginalWordmark size={size}/>
        case "yugabytedboriginal":
            return <icons.YugabytedbOriginal size={size}/>
        case "yugabytedbplainwordmark":
            return <icons.YugabytedbPlainWordmark size={size}/>
        case "yugabytedbplain":
            return <icons.YugabytedbPlain size={size}/>
        case "yunohostoriginal":
            return <icons.YunohostOriginal size={size}/>
        case "yunohostplain":
            return <icons.YunohostPlain size={size}/>
        case "zendlinewordmark":
            return <icons.ZendLineWordmark size={size}/>
        case "zendline":
            return <icons.ZendLine size={size}/>
        case "zendoriginalwordmark":
            return <icons.ZendOriginalWordmark size={size}/>
        case "zendoriginal":
            return <icons.ZendOriginal size={size}/>
        case "zigoriginalwordmark":
            return <icons.ZigOriginalWordmark size={size}/>
        case "zigoriginal":
            return <icons.ZigOriginal size={size}/>
        case "zigplainwordmark":
            return <icons.ZigPlainWordmark size={size}/>
        case "postmanplain":
            return <icons.PostmanPlain size={size}/>
        case "networkxoriginal":
            return <icons.NetworkxOriginal size={size}/>
        case "networkxplainwordmark":
            return <icons.NetworkxPlainWordmark size={size}/>
        case "bandsintownoriginal":
            return <SocialIcon network="bandsintown" bgColor="black" style={{width: size, height: size}}/>
        case "bskyoriginal":
            return <SocialIcon network="bsky" bgColor="black" style={{width: size, height: size}}/>
        case "clubhouseoriginal":
            return <SocialIcon network="clubhouse" bgColor="black" style={{width: size, height: size}}/>
        case "developeroriginal":
            return <SocialIcon network="developer" bgColor="black" style={{width: size, height: size}}/>
        case "discordoriginal":
            return <SocialIcon network="discord" bgColor="black" style={{width: size, height: size}}/>
        case "dribbbleoriginal":
            return <SocialIcon network="dribbble" bgColor="black" style={{width: size, height: size}}/>
        case "dropboxoriginal":
            return <SocialIcon network="dropbox" bgColor="black" style={{width: size, height: size}}/>
        case "emailoriginal":
            return <SocialIcon network="email" bgColor="black" style={{width: size, height: size}}/>
        case "fivehundredpixoriginal":
            return <SocialIcon network="fivehundredpix" bgColor="black" style={{width: size, height: size}}/>
        case "flickroriginal":
            return <SocialIcon network="flickr" bgColor="black" style={{width: size, height: size}}/>
        case "foursquareoriginal":
            return <SocialIcon network="foursquare" bgColor="black" style={{width: size, height: size}}/>
        case "google_playoriginal":
            return <SocialIcon network="google_play" bgColor="black" style={{width: size, height: size}}/>
        case "groupmeoriginal":
            return <SocialIcon network="groupme" bgColor="black" style={{width: size, height: size}}/>
        case "instagramoriginal":
            return <SocialIcon network="instagram" bgColor="black" style={{width: size, height: size}}/>
        case "itchoriginal":
            return <SocialIcon network="itch" bgColor="black" style={{width: size, height: size}}/>
        case "itunesoriginal":
            return <SocialIcon network="itunes" bgColor="black" style={{width: size, height: size}}/>
        case "leetcodeoriginal":
            return <SocialIcon network="leetcode" bgColor="black" style={{width: size, height: size}}/>
        case "linktreeoriginal":
            return <SocialIcon network="linktree" bgColor="black" style={{width: size, height: size}}/>
        case "mailtooriginal":
            return <SocialIcon network="mailto" bgColor="black" style={{width: size, height: size}}/>
        case "mastodonoriginal":
            return <SocialIcon network="mastodon" bgColor="black" style={{width: size, height: size}}/>
        case "matrixoriginal":
            return <SocialIcon network="matrix" bgColor="black" style={{width: size, height: size}}/>
        case "mediumoriginal":
            return <SocialIcon network="medium" bgColor="black" style={{width: size, height: size}}/>
        case "meetuporiginal":
            return <SocialIcon network="meetup" bgColor="black" style={{width: size, height: size}}/>
        case "openseaoriginal":
            return <SocialIcon network="opensea" bgColor="black" style={{width: size, height: size}}/>
        case "patreonoriginal":
            return <SocialIcon network="patreon" bgColor="black" style={{width: size, height: size}}/>
        case "pinterestoriginal":
            return <SocialIcon network="pinterest" bgColor="black" style={{width: size, height: size}}/>
        case "pixivoriginal":
            return <SocialIcon network="pixiv" bgColor="black" style={{width: size, height: size}}/>
        case "ravelryoriginal":
            return <SocialIcon network="ravelry" bgColor="black" style={{width: size, height: size}}/>
        case "rdiooriginal":
            return <SocialIcon network="rdio" bgColor="black" style={{width: size, height: size}}/>
        case "redditoriginal":
            return <SocialIcon network="reddit" bgColor="black" style={{width: size, height: size}}/>
        case "rssoriginal":
            return <SocialIcon network="rss" bgColor="black" style={{width: size, height: size}}/>
        case "sharethisoriginal":
            return <SocialIcon network="sharethis" bgColor="black" style={{width: size, height: size}}/>
        case "smugmugoriginal":
            return <SocialIcon network="smugmug" bgColor="black" style={{width: size, height: size}}/>
        case "snapchatoriginal":
            return <SocialIcon network="snapchat" bgColor="black" style={{width: size, height: size}}/>
        case "soundcloudoriginal":
            return <SocialIcon network="soundcloud" bgColor="black" style={{width: size, height: size}}/>
        case "spotifyoriginal":
            return <SocialIcon network="spotify" bgColor="black" style={{width: size, height: size}}/>
        case "squarespaceoriginal":
            return <SocialIcon network="squarespace" bgColor="black" style={{width: size, height: size}}/>
        case "toriginal":
            return <SocialIcon network="t" bgColor="black" style={{width: size, height: size}}/>
        case "telegramoriginal":
            return <SocialIcon network="telegram" bgColor="black" style={{width: size, height: size}}/>
        case "threadsoriginal":
            return <SocialIcon network="threads" bgColor="black" style={{width: size, height: size}}/>
        case "tiktokoriginal":
            return <SocialIcon network="tiktok" bgColor="black" style={{width: size, height: size}}/>
        case "tumblroriginal":
            return <SocialIcon network="tumblr" bgColor="black" style={{width: size, height: size}}/>
        case "twitchoriginal":
            return <SocialIcon network="twitch" bgColor="black" style={{width: size, height: size}}/>
        case "upworkoriginal":
            return <SocialIcon network="upwork" bgColor="black" style={{width: size, height: size}}/>
        case "vevooriginal":
            return <SocialIcon network="vevo" bgColor="black" style={{width: size, height: size}}/>
        case "vimeooriginal":
            return <SocialIcon network="vimeo" bgColor="black" style={{width: size, height: size}}/>
        case "vineoriginal":
            return <SocialIcon network="vine" bgColor="black" style={{width: size, height: size}}/>
        case "vkoriginal":
            return <SocialIcon network="vk" bgColor="black" style={{width: size, height: size}}/>
        case "vscooriginal":
            return <SocialIcon network="vsco" bgColor="black" style={{width: size, height: size}}/>
        case "wechatoriginal":
            return <SocialIcon network="wechat" bgColor="black" style={{width: size, height: size}}/>
        case "whatsapporiginal":
            return <SocialIcon network="whatsapp" bgColor="black" style={{width: size, height: size}}/>
        case "xoriginal":
            return <SocialIcon network="x" bgColor="black" style={{width: size, height: size}}/>
        case "xiaohongshuoriginal":
            return <SocialIcon network="xiaohongshu" bgColor="black" style={{width: size, height: size}}/>
        case "xingoriginal":
            return <SocialIcon network="xing" bgColor="black" style={{width: size, height: size}}/>
        case "yelporiginal":
            return <SocialIcon network="yelp" bgColor="black" style={{width: size, height: size}}/>
        case "youtubeoriginal":
            return <SocialIcon network="youtube" bgColor="black" style={{width: size, height: size}}/>
        case "mynicknameoriginal":
            return <SocialIcon network="mynickname" bgColor="black" style={{width: size, height: size}}/>
        default:
            return <icons.GoogleOriginal size={size}/>
    }
}

export default Icon