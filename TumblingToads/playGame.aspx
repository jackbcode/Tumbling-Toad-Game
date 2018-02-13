<%@ Page Language="C#" AutoEventWireup="true" CodeFile="playGame.aspx.cs" Inherits="playGame" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="Css/StyleSheet.css" rel="stylesheet" />
   <link runat="server" rel="shortcut icon" href="~/frogs_head_d0d_1.ico" type="image/x-icon" />
    <link runat="server" rel="icon" href="~/frogs_head_d0d_1.ico" type="image/ico" />
   <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Lato|Open+Sans|Source+Sans+Pro" rel="stylesheet"/>
     <meta name="viewport" content="width=device-width, initial-scale=4.0"/>
    <title>Tumbling Toad</title>
    <script src="Scripts/JavaScript.js" type="text/javascript"></script>
</head>



<body>
   
        <div id="mainText" style="display:flex; justify-content:center; align-items:center;">
                <asp:Label ID="maintitleOne" runat="server" Text="Tumbling Toad "  ></asp:Label>
                     <asp:Label ID="spacerLabel" runat="server" Text=""></asp:Label>
                <asp:Image ID="titleImage" runat="server" src="Images/Frogs%20Head.png"/>
             </div>
    
          <div>
              <p>Click on the letters to guess the word </p>
          </div>

     <div class="wrapper">
         <div id="buttons"></div>  
    </div>

    <div class ="wrapper2">
          <div class ="mainDiv1" > 
                 <p id="catagoryNameHolder"></p>
             <br />
                <div id="hold"></div>
             <br />
                 <p id="userlives"></p>
             <br />
               <form id="form1" runat="server">
         <asp:Button ID="PlayAgainButton" runat="server" Text="Play Again" OnClick="PlayAgainButton_Click" />
    <asp:HiddenField ID="hiddenCsharpdata" runat="server" value =""/>
        <asp:HiddenField ID="categoryInfo" runat="server" Value ="" />
               </form>
          </div>
       
          <div id ="container">
              
          </div>
    </div>

</body>
</html>
