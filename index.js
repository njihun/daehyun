window.onload = () => {
    const nameElement = document.getElementById("region");
    const buttonElement = document.getElementById("button-region");
    buttonElement.addEventListener("click", () => {
        console.log(nameElement.value);
        if(nameElement.value.indexOf("울산")!=-1){
            window.location.href = "울산.html";
        }else if(nameElement.value.indexOf("서울")!=-1){
            window.location.href = "서울.html";
        }else if(nameElement.value.indexOf("부산")!=-1){
            window.location.href = "부산.html";
        }else if(nameElement.value.indexOf("대구")!=-1){
            window.location.href = "대구.html";
        }else if(nameElement.value.indexOf("포항")!=-1){
            window.location.href = "포항.html";
        }else if(nameElement.value.indexOf("제주")!=-1){
            window.location.href = "제주.html";
        }else if(nameElement.value.indexOf("대전")!=-1){
            window.location.href = "대전.html";
        }else if(nameElement.value.indexOf("광주")!=-1){
            window.location.href = "광주.html";
        }else{
            window.location.href = "노페이지.html";
        }
    });

};