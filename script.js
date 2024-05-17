let a=document.querySelectorAll(".ques .box");
        let x1=0;
        a[0].onclick=() =>{
            let plus=document.querySelector(".plus");
            let text=document.querySelector(".b1");

            if(x1==0){
                a[0].style.backgroundColor = "red";
                plus.innerHTML="X";
                text.setAttribute("class","b11");
                setTimeout(() => {
                    text.innerHTML="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.";
                }, 300);
                x1=1;
            }
            else{
                document.querySelector(".b11").innerHTML="";
                document.querySelector(".b11").setAttribute("class","b111");
                setTimeout(() => {
                    plus.innerHTML="+";
                    a[0].style.backgroundColor = "rgba(80, 74, 74, 0.425)";
                    document.querySelector(".b111").setAttribute("class","b1")
                }, 400);
                x1=0;
            }
        }
        let x2=0;
        a[1].onclick=() =>{
            let plus=document.querySelector(".plus");
            let text=document.querySelector(".b2");

            if(x2==0){
                a[1].style.backgroundColor = "red";
                plus.innerHTML="X";
                text.setAttribute("class","b11");
                setTimeout(() => {
                    text.innerHTML="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.";
                }, 300);
                x2=1;
            }
            else{
                document.querySelector(".b11").innerHTML="";
                document.querySelector(".b11").setAttribute("class","b111");
                setTimeout(() => {
                    plus.innerHTML="+";
                    a[1].style.backgroundColor = "rgba(80, 74, 74, 0.425)";
                    document.querySelector(".b111").setAttribute("class","b2")
                }, 400);
                x2=0;
            }
        }

        let x3=0;
        a[2].onclick=() =>{
            let plus=document.querySelector(".plus");
            let text=document.querySelector(".b3");

            if(x3==0){
                a[2].style.backgroundColor = "red";
                plus.innerHTML="X";
                text.setAttribute("class","b11");
                setTimeout(() => {
                    text.innerHTML="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.";
                }, 300);
                x3=1;
            }
            else{
                document.querySelector(".b11").innerHTML="";
                document.querySelector(".b11").setAttribute("class","b111");
                setTimeout(() => {
                    plus.innerHTML="+";
                    a[2].style.backgroundColor = "rgba(80, 74, 74, 0.425)";
                    document.querySelector(".b111").setAttribute("class","b3")
                }, 400);
                x3=0;
            }
        }
        let x4=0;
        a[3].onclick=() =>{
            let plus=document.querySelector(".plus");
            let text=document.querySelector(".b4");

            if(x4==0){
                a[3].style.backgroundColor = "red";
                plus.innerHTML="X";
                text.setAttribute("class","b11");
                setTimeout(() => {
                    text.innerHTML="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
                }, 300);
                x4=1;
            }
            else{
                document.querySelector(".b11").innerHTML="";
                document.querySelector(".b11").setAttribute("class","b111");
                setTimeout(() => {
                    plus.innerHTML="+";
                    a[3].style.backgroundColor = "rgba(80, 74, 74, 0.425)";
                    document.querySelector(".b111").setAttribute("class","b4")
                }, 400);
                x4=0;
            }
        }

        let x5=0;
        a[4].onclick=() =>{
            let plus=document.querySelector(".plus");
            let text=document.querySelector(".b5");

            if(x5==0){
                a[4].style.backgroundColor = "red";
                plus.innerHTML="X";
                text.setAttribute("class","b11");
                setTimeout(() => {
                    text.innerHTML="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
                }, 300);
                x5=1;
            }
            else{
                document.querySelector(".b11").innerHTML="";
                document.querySelector(".b11").setAttribute("class","b111");
                setTimeout(() => {
                    plus.innerHTML="+";
                    a[4].style.backgroundColor = "rgba(80, 74, 74, 0.425)";
                    document.querySelector(".b111").setAttribute("class","b5")
                }, 400);
                x5=0;
            }
        }

        let x6=0;
        a[5].onclick=() =>{
            let plus=document.querySelector(".plus");
            let text=document.querySelector(".b6");

            if(x6==0){
                a[5].style.backgroundColor = "red";
                plus.innerHTML="X";
                text.setAttribute("class","b11");
                setTimeout(() => {
                    text.innerHTML="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.";
                }, 300);
                x6=1;
            }
            else{
                document.querySelector(".b11").innerHTML="";
                document.querySelector(".b11").setAttribute("class","b111");
                setTimeout(() => {
                    plus.innerHTML="+";
                    a[5].style.backgroundColor = "rgba(80, 74, 74, 0.425)";
                    document.querySelector(".b111").setAttribute("class","b6")
                }, 400);
                x6=0;
            }
        }

                
            
        