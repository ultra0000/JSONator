sNameHACK = [];

var selectedABClassic = false;
var selectedABSeasons = false;

class HashMap
{
   HashMap(sourceObject = new Object())
   {
      var key = null;
      if(sourceObject)
      {
         for(key in sourceObject)
         {
            this[key] = sourceObject[key];
         }
      }
   }
}

var mObjectNamesToIds = new HashMap();

function initNameHACK()
{
   nameHackInitialized = true;

   sNameHACK["BLOCK_WOOD_1X2_1"] = "BLOCK_WOOD_1X2_1";
   sNameHACK["RedBird"] = "BIRD_RED";
   sNameHACK["RedBigBird"] = "BIRD_REDBIG";
   sNameHACK["SmallBlueBird"] = "BIRD_BLUE";
   sNameHACK["YellowBird"] = "BIRD_YELLOW";
   sNameHACK["BasicBird2"] = "BIRD_WHITE";
   sNameHACK["BlackBird"] = "BIRD_BLACK";
   sNameHACK["BoomerangBird"] = "BIRD_GREEN";
   sNameHACK["LargePiglette"] = "PIG_BASIC_BIG";
   sNameHACK["SmallPiglette"] = "PIG_BASIC_SMALL";
   sNameHACK["MediumPiglette"] = "PIG_BASIC_MEDIUM";
   sNameHACK["HelmetPiglette"] = "PIG_HELMET";
   sNameHACK["GrandpaPiglette"] = "PIG_MUSTACHE";
   sNameHACK["KingPiglette"] = "PIG_KING";
   sNameHACK["PIG_PORKADOR"] = "PIG_PORKADOR";
   sNameHACK["WoodBlock1"] = "WOOD_BLOCK_1X1";
   sNameHACK["WoodBlock2"] = "WOOD_BLOCK_2X1";
   sNameHACK["WoodBlock3"] = "WOOD_BLOCK_2X2";
   sNameHACK["WoodBlock4"] = "WOOD_BLOCK_4X1";
   sNameHACK["WoodBlock5"] = "WOOD_BLOCK_4X2";
   sNameHACK["WoodBlock6"] = "WOOD_BLOCK_8X1";
   sNameHACK["WoodBlock7"] = "WOOD_CIRCLE_4X4";
   sNameHACK["WoodBlock8"] = "WOOD_CIRCLE_2X2";
   sNameHACK["WoodBlock9"] = "WOOD_BLOCK_4X4_HOLLOW";
   sNameHACK["WoodBlock10"] = "WOOD_BLOCK_10X1";
   sNameHACK["WoodBlock11"] = "WOOD_TRIANGLE_4X4";
   sNameHACK["WoodBlock12"] = "WOOD_TRIANGLE_4X4_HOLLOW";
   sNameHACK["StoneBlock1"] = "STONE_BLOCK_1X1";
   sNameHACK["StoneBlock2"] = "STONE_BLOCK_2X1";
   sNameHACK["StoneBlock3"] = "STONE_BLOCK_2X2";
   sNameHACK["StoneBlock4"] = "STONE_BLOCK_4X1";
   sNameHACK["StoneBlock5"] = "STONE_BLOCK_4X2";
   sNameHACK["StoneBlock6"] = "STONE_BLOCK_8X1";
   sNameHACK["StoneBlock7"] = "STONE_CIRCLE_4X4";
   sNameHACK["StoneBlock8"] = "STONE_CIRCLE_2X2";
   sNameHACK["StoneBlock9"] = "STONE_BLOCK_4X4_HOLLOW";
   sNameHACK["StoneBlock10"] = "STONE_BLOCK_10X1";
   sNameHACK["StoneBlock11"] = "STONE_TRIANGLE_4X4";
   sNameHACK["StoneBlock12"] = "STONE_TRIANGLE_4X4_HOLLOW";
   sNameHACK["LightBlock1"] = "ICE_BLOCK_1X1";
   sNameHACK["LightBlock2"] = "ICE_BLOCK_2X1";
   sNameHACK["LightBlock3"] = "ICE_BLOCK_2X2";
   sNameHACK["LightBlock4"] = "ICE_BLOCK_4X1";
   sNameHACK["LightBlock5"] = "ICE_BLOCK_4X2";
   sNameHACK["LightBlock6"] = "ICE_BLOCK_8X1";
   sNameHACK["LightBlock7"] = "ICE_CIRCLE_4X4";
   sNameHACK["LightBlock8"] = "ICE_CIRCLE_2X2";
   sNameHACK["LightBlock9"] = "ICE_BLOCK_4X4_HOLLOW";
   sNameHACK["LightBlock10"] = "ICE_BLOCK_10X1";
   sNameHACK["LightBlock11"] = "ICE_TRIANGLE_4X4";
   sNameHACK["LightBlock12"] = "ICE_TRIANGLE_4X4_HOLLOW";
   sNameHACK["StaticFragileBlock01"] = "BREAKABLE_STATIC_BLOCK_1X1";
   sNameHACK["StaticFragileBlock02"] = "BREAKABLE_STATIC_BLOCK_5X2";
   sNameHACK["StaticFragileBlock03"] = "BREAKABLE_STATIC_BLOCK_10X2";
   sNameHACK["StaticFragileBlock04"] = "BREAKABLE_STATIC_BLOCK_5X5";
   sNameHACK["StaticFragileBlock05"] = "BREAKABLE_STATIC_BLOCK_10X10";
   sNameHACK["StaticFragileBlock06"] = "BREAKABLE_STATIC_BLOCK_INVISIBLE";
   sNameHACK["StaticBackgroundBlock_01"] = "TERRAIN_TEXTURED_HILLS_NON_COLLIDING_5X2";
   sNameHACK["StaticBackgroundBlock_02"] = "TERRAIN_TEXTURED_HILLS_NON_COLLIDING_10X2";
   sNameHACK["StaticBackgroundBlock_03"] = "TERRAIN_TEXTURED_HILLS_NON_COLLIDING_32X2";
   sNameHACK["StaticBackgroundBlock_04"] = "TERRAIN_TEXTURED_HILLS_NON_COLLIDING_5X5";
   sNameHACK["StaticBackgroundBlock_05"] = "TERRAIN_TEXTURED_HILLS_NON_COLLIDING_10X10";
   sNameHACK["StaticBackgroundBlock_06"] = "TERRAIN_TEXTURED_HILLS_NON_COLLIDING_1X1";
   sNameHACK["StaticBlockTheme01_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme01_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme01_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme01_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme01_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme01_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme02_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme02_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme02_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme02_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme02_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme02_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme03_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme03_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme03_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme03_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme03_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme03_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme04_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme04_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme04_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme04_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme04_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme04_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme05_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme05_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme05_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme05_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme05_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme05_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme06_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme06_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme06_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme06_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme06_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme06_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme07_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme07_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme07_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme07_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme07_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme07_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme08_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme08_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme08_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme08_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme08_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme08_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme09_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme09_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme09_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme09_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme09_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme09_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme10_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme10_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme10_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme10_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme10_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme10_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme11_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme11_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme11_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme11_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme11_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme11_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme12_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme12_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme12_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme12_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme12_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme12_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme13_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme13_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme13_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme13_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme13_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme13_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme14_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme14_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme14_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme14_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme14_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme14_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme15_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme15_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme15_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme15_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme15_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme15_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme16_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme16_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme16_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme16_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme16_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme16_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["StaticBlockTheme17_01"] = "TERRAIN_TEXTURED_HILLS_5X2";
   sNameHACK["StaticBlockTheme17_02"] = "TERRAIN_TEXTURED_HILLS_10X2";
   sNameHACK["StaticBlockTheme17_03"] = "TERRAIN_TEXTURED_HILLS_32X2";
   sNameHACK["StaticBlockTheme17_04"] = "TERRAIN_TEXTURED_HILLS_5X5";
   sNameHACK["StaticBlockTheme17_05"] = "TERRAIN_TEXTURED_HILLS_10X10";
   sNameHACK["StaticBlockTheme17_06"] = "TERRAIN_TEXTURED_HILLS_1X1";
   sNameHACK["ExtraApple"] = "MISC_FOOD_APPLE";
   sNameHACK["ExtraBanana"] = "MISC_FOOD_BANANA";
   sNameHACK["ExtraDonut01"] = "MISC_FOOD_DONUT";
   sNameHACK["ExtraHam"] = "MISC_FOOD_HAM";
   sNameHACK["ExtraStrawberry"] = "MISC_FOOD_STRAWBERRY";
   sNameHACK["ExtraMelon"] = "MISC_FOOD_WATERMELON";
   sNameHACK["ExtraStolenEgg"] = "MISC_PROP_WHITE_EGG";
   sNameHACK["ExtraStolenEgg"] = "MISC_PROP_WHITE_EGG";
   sNameHACK["StaticBalloon01"] = "MISC_BALLOON_GREEN";
   sNameHACK["StaticBalloon02"] = "MISC_BALLOON_PURPLE";
   sNameHACK["StaticBalloon03"] = "MISC_BALLOON_YELLOW";
   sNameHACK["StaticBalloon04"] = "MISC_BALLOON_BLUE";
   sNameHACK["StaticBalloon05"] = "MISC_BALLOON_RED";
   sNameHACK["Estrade01"] = "MISC_ESTRADE_7X2";
   sNameHACK["Estrade02"] = "MISC_ESTRADE_9X3";
   sNameHACK["Estrade03"] = "MISC_ESTRADE_11X3";
   sNameHACK["Estrade04"] = "MISC_ESTRADE_1X2";
   sNameHACK["ExtraRubberDuck"] = "MISC_RUBBER_DUCK";
   sNameHACK["ExtraBlockDice"] = "MISC_RUBBER_DICE";
   sNameHACK["ExtraBeachBall"] = "MISC_RUBBER_BEACHBALL";
   sNameHACK["ExtraBlockSmiley"] = "MISC_RUBBER_SMILEY";
   sNameHACK["ExtraBlockFlag01"] = "MISC_METAL_FLAG_FINLAND";
   sNameHACK["ExtraBlockFlag02"] = "MISC_METAL_FLAG_SWEDEN";
   sNameHACK["ExtraTire01"] = "MISC_METAL_TIRE_4X4";
   sNameHACK["ExtraTire02"] = "MISC_METAL_TIRE_3X3";
   sNameHACK["ExtraTire03"] = "MISC_METAL_TIRE_2X2";
   sNameHACK["ExtraPillar"] = "MISC_METAL_PILLAR";
   sNameHACK["ExtraDiamond"] = "MISC_METAL_DIAMOND";
   sNameHACK["ExtraBlockTNT"] = "MISC_EXPLOSIVE_TNT";
   sNameHACK["ExtraBlockStairs"] = "MISC_ESTRADE_2X2";
   sNameHACK["ExtraHolyGrail"] = "MISC_METAL_HOLYGRAIL";
   sNameHACK["ExtraStrongBall"] = "MISC_METAL_BALL_GREY";
   sNameHACK["ExtraTreasureChest"] = "MISC_METAL_CHEST";
   sNameHACK["BlockCarpet"] = "MISC_CARPET";
   sNameHACK["ExtraBanditoHat_1"] = "MISC_BANDITO_HAT";
   sNameHACK["ExtraCowboyHelmet_1"] = "MISC_COWBOY_HAT_BIG";
   sNameHACK["ExtraCowboyHelmetSmall_1"] = "MISC_COWBOY_HAT_SMALL";
   sNameHACK["ExtraSheriffHat_1"] = "MISC_SHERIFF_HAT_1";
   sNameHACK["ExtraSheriffHat_2"] = "MISC_SHERIFF_HAT_2";
   sNameHACK["ExtraRopeThick01"] = "BLOCK_ROPE_THICK";
   sNameHACK["ExtraRopeThin01"] = "BLOCK_ROPE_THIN";
   sNameHACK["ExtraRopeThin02"] = "BLOCK_ROPE_THIN_SHORT";
   sNameHACK["ExtraHelmetSmall"] = "MISC_HELMET_SMALL";
   sNameHACK["ExtraHelmetBig"] = "MISC_HELMET_BIG";
   sNameHACK["ExtraHelmetBoss"] = "MISC_HELMET_BOSS";
   sNameHACK["ExtraTrampoline"] = "MISC_METAL_BALL_RED";
   sNameHACK["ExtraTrampoline2"] = "MISC_RUBBER_TRAMPOLINE";
   sNameHACK["ExtraGoldenEgg"] = "MISC_GOLDEN_EGG";
   sNameHACK["ExtraSuperBowl"] = "MISC_EGG_SUPER_BOWL";
   sNameHACK["ExtraBlueBird"] = "MISC_BIRD_BLUE";
   sNameHACK["ExtraBoomerangBird"] = "MISC_BIRD_GREEN";
   sNameHACK["ExtraChain"] = "MISC_METAL_CHAIN";
   sNameHACK["ChromeStoneBlock1"] = "CHROME_STONE_BACK_4X4";
   sNameHACK["ChromeStoneBlock2"] = "CHROME_STONE_CIRCLE_4X4";
   sNameHACK["ChromeStoneBlock3"] = "CHROME_STONE_FORWARD_4X4";
   sNameHACK["ChromeStoneBlock4"] = "CHROME_STONE_INCOGNITO_4X4";
   sNameHACK["ChromeStoneBlock5"] = "CHROME_STONE_RELOAD_4X4";
   sNameHACK["ChromeStoneBlock6"] = "CHROME_STONE_STAR_4X4";
   sNameHACK["ChromeStoneBlock7"] = "CHROME_STONE_WRENCH_4X4";
   sNameHACK["ChromeStaticBlock2"] = "CHROME_PLATFORM_TAB1";
   sNameHACK["ChromeStaticBlock3"] = "CHROME_PLATFORM_TAB2";
   sNameHACK["ChromeBlockTNT"] = "CHROME_BOMB";
   sNameHACK["EXtraBlockImplosion"] = "CHROME_IMPLOSION_BOMB";
   sNameHACK["EXtraGlassBall"] = "CHROME_GLASS_BALL";
   sNameHACK["ChromeMetalBlock1"] = "CHROME_METAL_CIRCLE_4X4";
   sNameHACK["MiscGoldPot"] = "MISC_GOLD_POT";
   sNameHACK["MiscGoldPile2"] = "MISC_GOLD_PILE_2";
   sNameHACK["MiscBlackPumpkin"] = "MISC_BLACK_PUMPKIN";
   sNameHACK["MiscSkeletonHead"] = "MISC_SKELETON_HEAD";
   sNameHACK["theme1"] = "BACKGROUND_BLUE_GRASS";
   sNameHACK["theme2"] = "BACKGROUND_GREEN_PLANTS";
   sNameHACK["theme3"] = "BACKGROUND_RED_FLOWERS";
   sNameHACK["theme4"] = "BACKGROUND_BUSHES";
   sNameHACK["theme5"] = "BACKGROUND_CACTUS_DESERT";
   sNameHACK["theme6"] = "BACKGROUND_FOREST";
   sNameHACK["theme7"] = "BACKGROUND_CITY";
   sNameHACK["theme8"] = "BACKGROUND_CLOUDS";
   sNameHACK["theme9"] = "BACKGROUND_BIG_SETUP_BLUE_GRASS";
   sNameHACK["theme10"] = "BACKGROUND_BIG_SETUP_GREEN_PLANTS";
   sNameHACK["theme11"] = "BACKGROUND_BIG_SETUP_RED_FLOWERS";
   sNameHACK["theme12"] = "BACKGROUND_BIG_SETUP_BUSHES";
   sNameHACK["theme13"] = "BACKGROUND_BIG_SETUP_CACTUS_DESERT";
   sNameHACK["theme14"] = "BACKGROUND_BIG_SETUP_FOREST";
   sNameHACK["theme15"] = "BACKGROUND_BIG_SETUP_CITY";
   if (selectedABClassic)
   {
      sNameHACK["theme16"] = "BACKGROUND_WESTERN";
      sNameHACK["theme17"] = "BACKGROUND_CAVE";
      sNameHACK["theme19"] = "BACKGROUND_FB_BEACH";
   }
   else if (selectedABSeasons)
   {
      sNameHACK["theme16"] = "BACKGROUND_HALLOWEEN_2011";
      sNameHACK["theme17"] = "BACKGROUND_XMAS";
      sNameHACK["theme20"] = "BACKGROUND_EASTER";
      sNameHACK["theme21"] = "BACKGROUND_SUMMERPIGNIC";
      sNameHACK["theme23"] = "BACKGROUND_MOONFESTIVAL";
      sNameHACK["theme27"] = "BACKGROUND_CHERRY_BLOSSOM";
   }
   sNameHACK["ExtraFazerSquare"] = "FAZER_BLOCK";
   sNameHACK["ExtraFazerPyramid"] = "FAZER_CANDY_PYRAMID";
   sNameHACK["ExtraFazerCone"] = "FAZER_CANDY_CONE";
   sNameHACK["ExtraGoldenPistachio"] = "BLOCK_PISTACHIO_GOLD";
   sNameHACK["ExtraPistachio"] = "BLOCK_PISTACHIO";
   sNameHACK["ExtraShellLeft"] = "BLOCK_SHELL_LEFT";
   sNameHACK["ExtraShellRight"] = "BLOCK_SHELL_RIGHT";
   sNameHACK["wood"] = "MATERIAL_BLOCK_WOOD";
   sNameHACK["light"] = "MATERIAL_BLOCK_ICE";
   sNameHACK["rock"] = "MATERIAL_BLOCK_STONE";
   sNameHACK["extras"] = "OTHER_MATERIALS";
   sNameHACK["default"] = "DEFAULT";
   sNameHACK["decoration"] = "OTHER_MATERIALS";
}

function convertName(name)
{
   if (name.startsWith("StaticBlockTheme") && !sNameHACK[name])
   {
      // yandere dev type shit, oh well
      if (name.endsWith("_01"))
      {
         name = "TERRAIN_TEXTURED_HILLS_5X2";
      }
      else if (name.endsWith("_02"))
      {
         name = "TERRAIN_TEXTURED_HILLS_10X2";
      }
      else if (name.endsWith("_03"))
      {
         name = "TERRAIN_TEXTURED_HILLS_32X2";
      }
      else if (name.endsWith("_04"))
      {
         name = "TERRAIN_TEXTURED_HILLS_5X5";
      }
      else if (name.endsWith("_05"))
      {
         name = "TERRAIN_TEXTURED_HILLS_10X10";
      }
      else if (name.endsWith("_06"))
      {
         name = "TERRAIN_TEXTURED_HILLS_1X1";
      }
   }
   return sNameHACK[name] || name;
}

function fixArrays(jsonString, emptyObjectAsArray)
{
   var part = null;
   var convertToArray = false;
   var arrayParts = null;
   var mixed = false;
   var newOpen = 0;
   var newClose = 0;
   var partSemiColon = 0;
   var partOpeningBrace = 0;
   var part1 = null;
   var part2 = null;
   var part3 = null;
   var partBefore = null;
   var partAfter = null;
   var openingBrace = "{";
   var closingBrace = "}";
   var openingSquare = "[";
   var closingSquare = "]";
   var semicolon = ":";
   var comma = ",";
   var openingBraces = [];
   var openingSquares = [];
   var closingSquares = [];
   var newOpeningBraces = [];
   var newClosingBraces = [];
   var i = 0;
   var opening = jsonString.indexOf(openingBrace);
   var openingMax = opening;
   var closing = jsonString.indexOf(closingBrace);
   while(opening >= 0 || closing >= 0)
   {
      if(opening >= 0 && opening < closing)
      {
         openingBraces.push(opening);
         openingMax = opening;
      }
      else
      {
         opening = openingBraces.pop();
         part = jsonString.substring(opening,closing + 1);
         convertToArray = false;
         if(part.indexOf(openingBrace,1) < 0)
         {
            if(part.indexOf(semicolon,1) < 0)
            {
               if(emptyObjectAsArray || part.search(/[a-zA-Z0-9]+/g) >= 0)
               {
                  convertToArray = true;
               }
            }
            else
            {
               arrayParts = part.substr(1,part.length - 2).split(comma);
               mixed = false;
               for(i = 0; i < arrayParts.length; i++)
               {
                  if(arrayParts[i].indexOf(semicolon) < 0)
                  {
                     mixed = true;
                     break;
                  }
               }
               if(mixed)
               {
                  convertToArray = true;
                  for(i = 0; i < arrayParts.length; i++)
                  {
                     if(arrayParts[i].indexOf(semicolon) > 0)
                     {
                        newOpen = opening + part.indexOf(arrayParts[i]);
                        newClose = newOpen + arrayParts[i].length;
                        newOpeningBraces.push(newOpen);
                        newClosingBraces.push(newClose);
                     }
                  }
               }
            }
         }
         else
         {
            partSemiColon = part.indexOf(semicolon,1);
            if(partSemiColon < 0)
            {
               convertToArray = true;
            }
            else
            {
               partOpeningBrace = part.indexOf(openingBrace,1);
               if(partOpeningBrace > 0 && partSemiColon > partOpeningBrace)
               {
                  convertToArray = true;
               }
            }
         }
         if(convertToArray)
         {
            openingSquares.push(opening);
            closingSquares.push(closing);
         }
         closing = jsonString.indexOf(closingBrace,closing + 1);
      }
      opening = jsonString.indexOf(openingBrace,openingMax + 1);
   }
   for(i = 0; i < openingSquares.length; i++)
   {
      opening = openingSquares[i];
      closing = closingSquares[i];
      part1 = jsonString.substring(0,opening);
      part2 = jsonString.substring(opening + 1,closing);
      part3 = jsonString.substring(closing + 1);
      jsonString = part1 + openingSquare + part2 + closingSquare + part3;
   }
   for(i = newClosingBraces.length - 1; i >= 0; i--)
   {
      closing = newClosingBraces[i];
      opening = newOpeningBraces[i];
      partBefore = jsonString.substring(0,closing);
      partAfter = jsonString.substring(closing);
      jsonString = partBefore + closingBrace + partAfter;
      partBefore = jsonString.substring(0,opening);
      partAfter = jsonString.substring(opening);
      jsonString = partBefore + openingBrace + partAfter;
   }
   return jsonString;
}

function normalizeLuaString(luaString, emptyObjectAsArray = false)
{
   luaString = luaString.replace(/\-\-\[\[[\s\S]*?\]\]/mg,"");
   luaString = luaString.replace(/\-\-.*/g,"");
   luaString = luaString.replace(/NaN/g,"\"nil\"");
   luaString = luaString.replace(/\[\"(.*)\"\]/g,"$1");
   luaString = luaString.replace(/\}\s*$/mg,"},");
   luaString = luaString.replace(/^(.*\=\s*[^,\{\[\s]+)$/mg,"$&,");
   luaString = luaString.replace(/([^{,\=\s]*)\s*?\=/mg,"\"$1\":");
   luaString = "{" + luaString + "}";
   luaString = luaString.replace(/,(\s*[\]\}$])/mg,"$1");
   return fixArrays(luaString,emptyObjectAsArray);
}

function parseCamera(data, pixelRatio, id)
{
  var cameraData = {};
  var parsedCamaraData = {};

  if(data.ipad)
  {
    cameraData = data.ipad;
  }
  else
  {
    cameraData = data.iphone;
  }

  var cameraScreenWidth = cameraData.screenWidth;
  var cameraScreenHeight = cameraData.screenHeight;
  var scale = cameraData.sx;
  var posX = cameraData.px;
  var posY = cameraData.py;
  parsedCamaraData.x = posX / pixelRatio;
  parsedCamaraData.y = posY / pixelRatio;
  parsedCamaraData.left = (posX - 0.5 * cameraScreenWidth / scale) / pixelRatio;
  parsedCamaraData.right = (posX + 0.5 * cameraScreenWidth / scale) / pixelRatio;
  parsedCamaraData.top = (posY - 0.5 * cameraScreenHeight / scale) / pixelRatio;
  parsedCamaraData.bottom = (posY - 0.5 * cameraScreenHeight / scale) / pixelRatio;
  parsedCamaraData.scale = scale;
  parsedCamaraData.id = id;

  // afaik these are the only ones but there could be more
  if(parsedCamaraData.id == "birdCameraData")
  {
      parsedCamaraData.id = "Slingshot";
  }
  else if (parsedCamaraData.id == "castleCameraData")
  {
      parsedCamaraData.id = "Castle";
  }

  return parsedCamaraData;
}

function convertAngle(angle)
{
   return angle * 180 / Math.PI;
}

function parseLevel(luaString, emptyObjectAsArray = false, addJSONDebugString = false)
{
   initNameHACK();

  var jsonString = null;
  var returnObject = null;
  jsonString = normalizeLuaString(luaString,emptyObjectAsArray);
  /*try
  {*/
     returnObject = JSON.parse(jsonString);
  //}
  /*catch(e:Error)
  {
     throw new Error("Error parsing JSON string.\n" + jsonString);
  }*/
  if(addJSONDebugString)
  {
     returnObject.debug = luaString;
  }

  var previousCounts = returnObject.counts;
  delete returnObject.counts;
  returnObject.counts = {};
  returnObject.counts.birds = 0;
  returnObject.counts.blocks = 0;
  returnObject.counts.joints = 0;

  var indexId = 0;

  // world stuff
  Object.keys(returnObject.world).forEach(function(key){
   Object.keys(returnObject.world[key]).forEach(function(subKey){
       var subValue = returnObject.world[key].definition;
       if (typeof subValue === 'string' || subValue instanceof String)
       {
           subValue = convertName(subValue);
           returnObject.world[key].id = subValue;
           returnObject.world[key].angle = convertAngle(returnObject.world[key].angle);
           if (!returnObject.world[key].name.includes("Bird") && !returnObject.world[key].name.includes("ground"))
           {
               this.mObjectNamesToIds[returnObject.world[key].name] = indexId;
               indexId++;
           }
           delete returnObject.world[key].definition;
           delete returnObject.world[key].name;
           delete returnObject.world[key].startNumber;
       }
   });
   if (key.includes("Block"))
   {
      returnObject.counts.blocks++;
      returnObject.world["block_" + returnObject.counts.blocks] = returnObject.world[key];
      delete returnObject.world[key];
   }
   else if (key.includes("Bird"))
   {
      returnObject.counts.birds++;
      returnObject.world["bird_" + returnObject.counts.birds] = returnObject.world[key];
      delete returnObject.world[key];
   }
   else if (returnObject.world[key].id.includes("Ground"))
   {
      delete returnObject.world[key];
   }
   else
   {
      returnObject.counts.blocks++;
      returnObject.world["block_" + returnObject.counts.blocks] = returnObject.world[key];
      delete returnObject.world[key];
   }
  });

   returnObject.camera = [];

   // joint stuff
   Object.keys(returnObject.joints).forEach(function(key){
      returnObject.counts.joints++;
      returnObject.joints[key].index1 = this.mObjectNamesToIds[returnObject.joints[key].end1];
      returnObject.joints[key].index2 = this.mObjectNamesToIds[returnObject.joints[key].end2];
      
      delete returnObject.joints[key].end1;
      delete returnObject.joints[key].end2;

      // couldn't find any levels in ab chrome that use this, 
      // maybe it's used in other webgames?
      delete returnObject.joints[key].coordType;

      delete returnObject.joints[key].name;
      
      returnObject.world["joint_" + returnObject.counts.joints] = returnObject.joints[key];
   });
   delete returnObject.joints;

  // other
  Object.keys(returnObject).forEach(function(key){
   var value = returnObject[key];
   if (typeof value === 'string' || value instanceof String)
   {
       value = convertName(value);
       returnObject[key] = value;
   }

   if (key.endsWith("CameraData"))
   {
      returnObject["camera"].push(parseCamera(returnObject[key], returnObject.physicsToWorld, key));
      delete returnObject[key];
   }
  });

  // some renaming
  returnObject.id = returnObject.filename;
  delete returnObject.filename;
  
  // some deleting
  delete returnObject.physicsToWorld;
  if (returnObject.scores) {
   returnObject.scoreGold = returnObject.scores.Gold;
   returnObject.scoreSilver = returnObject.scores.Silver;
   returnObject.scoreEagle = returnObject.scores.eagleScore;
   delete returnObject.scores;
  }

  return returnObject;
}

// based on birdecryptor too
document.getElementById("parse").addEventListener('click', () => {
    if (document.querySelector("#ab_classic").checked)
    {
      selectedABSeasons = false;
      selectedABClassic = true;
    }
    else if (document.querySelector("#ab_seasons").checked)
    {
      selectedABClassic = false;
      selectedABSeasons = true;
    }
    if (document.getElementById('luaInput').files.length == 0)
        document.querySelector('span').hidden = false;
    else {
        document.querySelector('span').hidden = true;
        
        // Iterate through each uploaded file
        for (let i = 0; i < document.getElementById('luaInput').files.length; i++) {
            let lvl = document.getElementById('luaInput').files[i],
                reader = new FileReader();

            reader.addEventListener(('load'), data => {
                var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(parseLevel(reader.result)));
                var dl = document.getElementById('downloadLink');
                dl.setAttribute("href", dataStr);
                dl.setAttribute("download", lvl.name + '.json');
                dl.textContent = lvl.name + '.json';
                dl.click();
            });

            if (lvl)
            {
                reader.readAsText(lvl);
            }
        }
      }
});
