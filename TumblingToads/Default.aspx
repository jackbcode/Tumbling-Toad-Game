<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Tumbling Toad</title>
    <link href="Css/StyleSheet.css" rel="stylesheet" />
    <link runat="server" rel="shortcut icon" href="~/frogs_head_d0d_1.ico" type="image/x-icon" />
    <link runat="server" rel="icon" href="~/frogs_head_d0d_1.ico" type="image/ico" />
    <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Lato|Open+Sans|Source+Sans+Pro" rel="stylesheet"/>
   <meta name="viewport" content="width=device-width, initial-scale=4.0"/>

</head>
<body>
    <form id="form1" runat="server">
        <div>
             <div id="mainText" style="display:flex; justify-content:center; align-items:center;">
                <asp:Label ID="maintitleOne" runat="server" Text="Tumbling Toad "  ></asp:Label>
                     <asp:Label ID="spacerLabel" runat="server" Text=""></asp:Label>
                <asp:Image ID="titleImage" runat="server" src="Images/Frogs%20Head.png"/>
             </div>
            <br />
            <asp:Label ID="main1" runat="server" Text="Guess the word and stop the toad from tumbling"></asp:Label>
            <br />
            <br />
            <br />
            <asp:Label ID="Category" runat="server" Text="Choose a category below to start"></asp:Label>
            <br />
            <br />
             <br />
            <asp:Panel ID="Panel2" runat="server" Class="animalButtons">
                <asp:ImageButton ID="buttonAmphibian"  src="Images/Frog%20Sitting%20Without%20Branch.png"  runat="server"  OnClick="buttonAmphibian_Click" />
                <asp:ImageButton ID="buttonFish" src= "Images/Fish.png" runat="server"  OnClick="buttonFish_Click"/>
                <asp:ImageButton ID="buttonReptile" src="Images/Snake.png" runat="server"  OnClick="buttonReptile_Click"/>
                <asp:ImageButton ID="buttonBird" src="Images/Bird.png"   runat="server"  OnClick="buttonBird_Click"/>
                <asp:ImageButton ID="buttonMammal" src="Images/Elephant.png" runat="server"  OnClick="buttonMammal_Click"/>
            </asp:Panel>
            
            
        </div>
    </form>
</body>
</html>
