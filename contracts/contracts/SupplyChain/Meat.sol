// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Meat {

      struct meat
    {
      Animal source;
      Fodder fodder;
      Part part;
        }

     enum Animal
    {
     Beef,
     Lamb,
     pork,
     veal,
     goat,
     wagyu,
     sheep
    }   

    enum Fodder
    {
      Grassfed,
      Grainfed
    }
    
     struct Part
     {
         CHUCK chuck;
         BRISKET brisket;
         SHANK shank;
         RIB rib;
         PLATE plate;
         SHORT_LOIN shortLoin;
         SIR_LOIN sirLoin;
         FLANK flank;
         ROUND round;
     }
     enum CHUCK
     {
        Flat_Iron,
        Top_Blade_Steak,
        Chuck_Roast,
        Chuck_Arm_Roast,
        Mock_Tender_Steak,
        Mock_Tender,
        Clod_Heart,
        Ranch_Steak,
        Petite_Tender,
        Shoulder_Tender_Medallions,
        Cross_Rib_Roast,
        Sierra_Steak,
        Denver_Steak,   
        Boneless_Country_Style_Ribs,
        Bone_In_Chuck_Short_Ribs,
        Chuck_Eye_Steak
     }
     enum RIB
     {
        Ribeye,
        Bone_in_Rib_Roast,
        Rib_Filet,
        Ribeye_Roast,
        Cowboy_Steak,
        Bone_in_Ribeye,
        Bone_in_Plate_Short_Ribs,
        Back_Ribs,
        Chef_Cut_Ribeye
     }

     enum SHORT_LOIN
     {
        Boneless_Strip_Steak,
        Strip_Filet,
        Strip_Roast,
        Tenderloin_Roast,
        T_Bone,
        Porterhouse,
        Filet_Mignon,
        Hanger_Steak
     }

     enum SIR_LOIN
     {
        Center_Cut_Sirloin_Steak,
        Top_Sirloin_Steak,
        Coulotte_Steak,
        Sirloin_Filet,
        Tri_Tip_Steak,
        Tri_Tip,
        Ball_Tip_Steak,
        Ball_Tip,
        Sirloin_Flap
     }

    enum ROUND
    {
        Rump_Roast,
        Top_Round_London_Broil,
        Top_Round_Roast,
        Top_Round_Steak,
        Bottom_Round_Steak,
        Bottom_Round_London_Broil,
        Bottom_Round_Roast,
        Eye_of_Round_Roast,
        Eye_of_Round_Steak,
        Sirloin_Tip_Center_Roast,
        Sirloin_Tip_Center_Steak,
        Sirloin_Tip_Side_Steak,
        Butterfly_Top_Round_Steak

    }

    enum FLANK
    {
        flank
    }
    enum PLATE
    {
        Short_Ribs,
        Inside_Skirt
    }

    enum BRISKET
    {
        Whole_Brisket,
        Brisket_Flat,
        Brisket_Point
    }

    enum SHANK
    {
        Shank_Cross_Cut
    }
  


}