//menu
const Menu = document.querySelector('.nav-bar');
const closeMenu = document.querySelector('.closeMenu');
const burger = document.querySelector('.burger');
const menuBack = document.querySelector('.menu-back');
const allMain = document.querySelector('main');


burger.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    Menu.style.display = 'flex';
    Menu.style.marginTop = '500px';
    Menu.style.height = '150px';
    Menu.style.flexDirection = 'column';
    Menu.style.alignItems = 'center';
    Menu.style.background = 'none';
    Menu.style.position = 'absolute';
    Menu.style.zIndex = '2';
    Menu.style.right = '0';
    Menu.style.left = '0';
    Menu.style.marginRight = 'auto';
    Menu.style.marginLeft = 'auto';
    menuBack.style.visibility = 'visible';
    menuBack.style.opacity = '0.3';
    allMain.style.opacity = '0.1';
    burger.style.display = 'none';
    closeMenu.style.opacity = '1';
    closeMenu.style.visibility = 'visible';
    closeMenu.style.transform = 'rotate(90deg)';
    
}
function close(){
    Menu.style.display = 'none';
    closeMenu.style.opacity = '0';
    closeMenu.style.visibility = 'hidden';
    burger.style.display = 'flex';
    menuBack.style.visibility = 'hidden';
    menuBack.style.opacity = '0';
    allMain.style.opacity = '1';
    closeMenu.style.transform = 'rotate(90deg)';
    
}
//select region
    var redRegion = document.querySelector('#red-region');
    var userTBILISI = document.getElementById('TBILISI').textContent;
    const choosTBILISI = document.querySelector('#TBILISI');
    choosTBILISI.addEventListener('click',select);
    function select (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userTBILISI;
        const text = document.getElementById("selectText");
        text.innerHTML = userTBILISI;
        redRegion.style.color = "black";
        
        
    }
    //
    var userAPKhAZETI = document.getElementById("APKhAZETI").textContent;
    const choosAPKhAZETI = document.querySelector('#APKhAZETI');
    choosAPKhAZETI.addEventListener('click',select2);
    function select2 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userAPKhAZETI;
        const text = document.getElementById("selectText");
        text.innerHTML = userAPKhAZETI;
        redRegion.style.color = "black";
    }
    //
    var userACHARA = document.getElementById("ACHARA").textContent;
    const choosACHARA = document.querySelector('#ACHARA');
    choosACHARA.addEventListener('click',select3);
    function select3 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userACHARA;
        const text = document.getElementById("selectText");
        text.innerHTML = userACHARA;
        redRegion.style.color = "black";
    }
    //
    var userGURIA = document.getElementById("GURIA").textContent;
    const choosGURIA = document.querySelector('#GURIA');
    choosGURIA.addEventListener('click',select4);
    function select4 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userGURIA;
        const text = document.getElementById("selectText");
        text.innerHTML = userGURIA;
        redRegion.style.color = "black";
    }
    //
    var userIMERETI = document.getElementById("IMERETI").textContent;
    const choosIMERETI = document.querySelector('#IMERETI');
    choosIMERETI.addEventListener('click',select5);
    function select5 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userIMERETI;
        const text = document.getElementById("selectText");
        text.innerHTML = userIMERETI;
        redRegion.style.color = "black";
    }
    //
    var userKAXETI = document.getElementById("KAXETI").textContent;
    const choosKAXETI = document.querySelector('#KAXETI');
    choosKAXETI.addEventListener('click',select6);
    function select6 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userKAXETI;
        const text = document.getElementById("selectText");
        text.innerHTML = userKAXETI;
        redRegion.style.color = "black";
    }
    //
    var userMCXETAMTIANETI = document.getElementById("MCXETA-MTIANETI").textContent;
    const choosMCXETAMTIANETI = document.querySelector('#MCXETA-MTIANETI');
    choosMCXETAMTIANETI.addEventListener('click',select7);
    function select7 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userMCXETAMTIANETI;
        const text = document.getElementById("selectText");
        text.innerHTML = userMCXETAMTIANETI;
        redRegion.style.color = "black";
    }
    //
    var userRACHALECHXUMIQVEMOSVANETI = document.getElementById("RACHA-LECHXUMI-QVEMOSVANETI").textContent;
    const choosRACHALECHXUMIQVEMOSVANETI = document.querySelector('#RACHA-LECHXUMI-QVEMOSVANETI');
    choosRACHALECHXUMIQVEMOSVANETI.addEventListener('click',select8);
    function select8 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userRACHALECHXUMIQVEMOSVANETI;
        const text = document.getElementById("selectText");
        text.innerHTML = userRACHALECHXUMIQVEMOSVANETI;
        redRegion.style.color = "black";
    }
    //
    var userSAMEGRELOZEMOSVANETI = document.getElementById("SAMEGRELO-ZEMOSVANETI").textContent;
    const choosSAMEGRELOZEMOSVANETI = document.querySelector('#SAMEGRELO-ZEMOSVANETI');
    choosSAMEGRELOZEMOSVANETI.addEventListener('click',select9);
    function select9 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userSAMEGRELOZEMOSVANETI;
        const text = document.getElementById("selectText");
        text.innerHTML = userSAMEGRELOZEMOSVANETI;
        redRegion.style.color = "black";
    }
    //
    var userSAMCXEJAVAXETI = document.getElementById("SAMCXE-JAVAXETI").textContent;
    const choosSAMCXEJAVAXETI = document.querySelector('#SAMCXE-JAVAXETI');
    choosSAMCXEJAVAXETI.addEventListener('click',select10);
    function select10 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userSAMCXEJAVAXETI;
        const text = document.getElementById("selectText");
        text.innerHTML = userSAMCXEJAVAXETI;
        redRegion.style.color = "black";
    }
    //
    var userQVEMOQARTLI = document.getElementById("QVEMO-QARTLI").textContent;
    const choosQVEMOQARTLI = document.querySelector('#QVEMO-QARTLI');
    choosQVEMOQARTLI.addEventListener('click',select11);
    function select11 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userQVEMOQARTLI;
        const text = document.getElementById("selectText");
        text.innerHTML = userQVEMOQARTLI;
        redRegion.style.color = "black";
    }
    //
    var userSHIDAQARTLI = document.getElementById("SHIDA-QARTLI").textContent;
    const choosSHIDAQARTLI = document.querySelector('#SHIDA-QARTLI');
    choosSHIDAQARTLI.addEventListener('click',select12);
    function select12 (){
        const Element = document.getElementById("word-region");
        Element.innerHTML = userSHIDAQARTLI;
        const text = document.getElementById("selectText");
        text.innerHTML = userSHIDAQARTLI;
        redRegion.style.color = "black";
    }
//select position
    var x = 0;
    var redPosition = document.querySelector('#red-position');
    var userTeacher = document.getElementById("teacher").textContent;
    const choosTeacher = document.querySelector('#teacher');
    choosTeacher.addEventListener('click',select13);
    function select13 (){
        const Element = document.getElementById("word-position");
        Element.innerHTML = userTeacher;
        const text = document.getElementById("selectText2");
        text.innerHTML = userTeacher;
        redPosition.style.color = "black";
        x = 1;
    }
    //
    var userPoliceman = document.getElementById("policeman").textContent;
    const choosPoliceman = document.querySelector('#policeman');
    choosPoliceman.addEventListener('click',select14);
    function select14 (){
        const Element = document.getElementById("word-position");
        Element.innerHTML = userPoliceman;
        const text = document.getElementById("selectText2");
        text.innerHTML = userPoliceman;
        redPosition.style.color = "black";
        x = 2;
    }
    //open "other position" section
    var userOther = document.getElementById("other");
    const choosOther = document.querySelector('#other');
    const sectionOther = document.querySelector('#text');
    const otherPosition = document.querySelector('#other-position');
    const dropDownListTwo = document.querySelector('.dropdown-list2');
    const asterickThird = document.querySelector('.astr3');
    const asterickFourth = document.querySelector('.astr4');
    const asterickFivth = document.querySelector('.astr5');
    const asterickSixth = document.querySelector('.astr6');
    const asterickSeventh = document.querySelector('.astr7');
    const closeOther = document.querySelector('.close-other');
    choosOther.addEventListener('click',select15);
    function select15 (){
        dropDownListTwo.style.top = '-1000px';
        otherPosition.style.visibility = 'visible';
        otherPosition.style.opacity = '1';
        otherPosition.style.position = 'unset';
        otherPosition.style.marginTop = '34px';
        sectionOther.style.visibility = 'visible';
        sectionOther.style.opacity = '1';
        sectionOther.style.position = 'unset';
        sectionOther.style.marginTop = '13px';

        asterickThird.style.marginTop = '473px';
        asterickFourth.style.marginTop = '583px';
        asterickFivth.style.marginTop = '693px';
        asterickSixth.style.marginTop = '803px';
        asterickSeventh.style.marginTop = '913px';

        openEyeOne.style.marginTop = '844px';
        closeEyeOne.style.marginTop = '844px';

        openEyeSecond.style.marginTop = '954px';
        closeEyeSecond.style.marginTop = '954px';

        const text = document.getElementById("selectText2");
        text.innerHTML = "სხვა";

        closeOther.style.visibility = 'visible';
        closeOther.style.opacity = '1';
    }
    //close "other position" section
    closeOther.addEventListener('click',closeother);
    function closeother (){
        otherPosition.style.visibility = 'hidden';
        otherPosition.style.opacity = '0';
        otherPosition.style.position = 'absolute';
        sectionOther.style.visibility = 'hidden';
        sectionOther.style.opacity = '0';
        sectionOther.style.position = 'absolute';
        closeOther.style.visibility = 'hidden';
        closeOther.style.opacity = '0';

        dropDownListTwo.style.top = 'unset';

        asterickThird.style.marginTop = '363px';
        asterickFourth.style.marginTop = '473px';
        asterickFivth.style.marginTop = '583px';
        asterickSixth.style.marginTop = '693px';
        asterickSeventh.style.marginTop = '803px';

        openEyeOne.style.marginTop = '734px';
        closeEyeOne.style.marginTop = '734px';

        openEyeSecond.style.marginTop = '844px';
        closeEyeSecond.style.marginTop = '844px';
    }

//pwd eye
    const openEyeOne = document.querySelector('.eye1');
    const closeEyeOne = document.querySelector('.hidden-eye1');
    openEyeOne.addEventListener('click',closeeye);
    function closeeye (){
        openEyeOne.style.visibility = 'hidden';
        openEyeOne.style.opacity = '0';
        closeEyeOne.style.visibility = 'visible';
        closeEyeOne.style.opacity = '1';

        var z = document.getElementById("pwd");
        if (z.type === "password") {
            z.type = "text";
        } else {
            z.type = "password";
        }
    }
    closeEyeOne.addEventListener('click',openeye);
    function openeye (){
        openEyeOne.style.visibility = 'visible';
        openEyeOne.style.opacity = '1';
        closeEyeOne.style.visibility = 'hidden';
        closeEyeOne.style.opacity = '0';
        var z = document.getElementById("pwd");
        if (z.type === "password") {
            z.type = "text";
        } else {
            z.type = "password";
        }
    }
//repwd eye
    const openEyeSecond = document.querySelector('.eye2');
    const closeEyeSecond = document.querySelector('.hidden-eye2');
    openEyeSecond.addEventListener('click',closeeye2);
    function closeeye2 (){
        openEyeSecond.style.visibility = 'hidden';
        openEyeSecond.style.opacity = '0';
        closeEyeSecond.style.visibility = 'visible';
        closeEyeSecond.style.opacity = '1';

        var z = document.getElementById("repwd");
        if (z.type === "password") {
            z.type = "text";
        } else {
            z.type = "password";
        }
    }
    closeEyeSecond.addEventListener('click',openeye2);
    function openeye2 (){
        openEyeSecond.style.visibility = 'visible';
        openEyeSecond.style.opacity = '1';
        closeEyeSecond.style.visibility = 'hidden';
        closeEyeSecond.style.opacity = '0';
        var z = document.getElementById("repwd");
        if (z.type === "password") {
            z.type = "text";
        } else {
            z.type = "password";
        }
    }
//Popup
    const regButton = document.querySelector('.button-reg');
    const openPopup = document.querySelector('.openPopup');
    const closeOpenPopup = document.querySelector('.close-openPopup');

    closeOpenPopup.addEventListener('click',down);
    function down(){
        closeOpenPopup.style.visibility = 'hidden';
        closeOpenPopup.style.opacity = '0';
        openPopup.style.visibility = 'hidden';
        openPopup.style.opacity = '0';
        menuBack.style.visibility = 'hidden';
        menuBack.style.opacity = '0';
    }
    
    regButton.addEventListener('click',up);
    
    function up(){
        var sectionOtherUser = document.getElementById('text').value;
        var userName = document.getElementById("fname").value;
        var userLName = document.getElementById("lname").value;
        var userEmail = document.getElementById("mail").value;

        
        const element = document.getElementById("word-fname");
        element.innerHTML = userName;
        const element2 = document.getElementById("word-lname");
        element2.innerHTML = userLName;
        const element3 = document.getElementById("word-mail");
        element3.innerHTML = userEmail;
        
        var necessaryFName = document.forms["RegForm"]["fname"];
        var necessaryLName = document.forms["RegForm"]["lname"];
        var necessaryMail = document.forms["RegForm"]["mail"];
        var necessaryPwd = document.forms["RegForm"]["pwd"];
        var necessaryRePwd = document.forms["RegForm"]["repwd"];
        var selectText = document.getElementById("selectText");
        const necessaryRegion = selectText.innerHTML;
        var selectText2 = document.getElementById("selectText2");
        const necessaryPosition = selectText2.innerHTML;
        var redFName = document.querySelector('#red-fname');
        var redLName = document.querySelector('#red-lname');
        var redMail = document.querySelector('#red-mail');
        var redPosition = document.querySelector('#red-position');
        var redRegion = document.querySelector('#red-region');
        var redPwd = document.querySelector('#red-pwd');
        var redRePwd = document.querySelector('#red-repwd');
    if (necessaryPosition == "სხვა") {
        const Element = document.getElementById("word-position");
        Element.innerHTML = sectionOtherUser;
            
    }

    if (necessaryFName.value == "") {
        redFName.style.color = "red";
    }
    //
    if (necessaryLName.value == "") {
        redLName.style.color = "red";
    }
    //
    var regixEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (necessaryMail.value == "" || regixEmail.test(necessaryMail.value) == false) {
        redMail.style.color = "red";
    }
    if (necessaryPosition == "აირჩიეთ პოზიცია") {
        redPosition.style.color = "red";
    }
    if (necessaryRegion == "აირჩიეთ რეგიონი") {
        redRegion.style.color = "red";
    }
    var regix = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if (necessaryPwd.value == "" || regix.test(necessaryPwd.value) == false){
        redPwd.style.color = "red"
    }
    
    if (necessaryRePwd.value == "" || regix.test(necessaryRePwd.value) == false || necessaryPwd.value != necessaryRePwd.value){
        redRePwd.style.color = "red"
    }
    if (necessaryFName.value != "" && necessaryLName.value != "" && necessaryMail.value != "" && necessaryPosition != "აირჩიეთ პოზიცია" && necessaryRegion != "აირჩიეთ რეგიონი" && regix.test(necessaryPwd.value) != false &&  regix.test(necessaryRePwd.value) != false && necessaryPwd.value == necessaryRePwd.value && regixEmail.test(necessaryMail.value) != false){
        
        closeOpenPopup.style.visibility = 'visible';
        closeOpenPopup.style.opacity = '1';
        openPopup.style.visibility = 'visible';
        openPopup.style.opacity = '1';
        menuBack.style.visibility = 'visible';
        menuBack.style.opacity = '0.8';
    }
        
}

    
    









