PassWord = "대현22";
TeacherList = [
    { name: "남지훈", pw: PassWord },
];
MemberList = [
    { name: "손유섭", studno: "10110" },
    { name: "남지훈", studno: "10107" },
    { name: "나예준", studno: "10106" },
    { name: "허윤제", studno: "10123" },
    { name: "유진오", studno: "10114" },
    { name: "김태연", studno: "10606" },
    { name: "김민재", studno: "10304" },
    { name: "박세현", studno: "10610" },
    { name: "정우진", studno: "10815" },
    { name: "정민겸", studno: "10321" },
    { name: "이동주", studno: "10716" },
];
if (window.confirm("대현고등학교 학생입니까?")) {
    var my = {};
    my.name = window.prompt("이름을 입력하세요", "홍길동");
    window.name();
} else {
    if (window.confirm("대현고등학교 선생님입니까?")) {
        var my = {};
        my.name = window.prompt("이름을 입력하세요", "홍길동");
        window.TeacherName();
    } else {
        window.location.assign(window.location.href);
        alert("이 페이지는 대현고등학교 전용 페이지입니다.");
    }
}
function TeacherName() {
    if (my.name == null) {
        window.location.assign(window.location.href);
    } else if (my.name == "") {
        my.name = window.prompt("이름을 입력하세요", "홍길동");
        window.TeacherName();
    } else {
        my.pw = window.prompt("암호를 입력하세요", "PassWord");
        window.pw();
    }
}
function pw() {
    if (my.pw == null || my.pw == "") {
        window.location.assign(window.location.href);
    } else {
        window.administratorpage();
    }
}
function administratorpage() {
    for (i = 0; i < TeacherList.length; i++) {
        if (TeacherList[i].name === my.name) {
            if (TeacherList[i].pw === my.pw) {
                document.write(my.name + "님 반가워요")
                return;
            } else {
                result = "페이지 접근 권한이 없습니다.";
            }
        } else {
            result = "페이지 접근 권한이 없습니다.";
        }
    }
    alert(result);
    window.location.assign(window.location.href);
}
function mOver(obj) {
    obj.innerHTML = "동아리 멤버 목록";
    let Members;
    Members = "총 " + MemberList.length + "명";
    for (i = 0; i < MemberList.length; i++) {
        Members += "<li>" + MemberList[i].name + "</li>";
    }
    obj.innerHTML += "<ol>" + Members + "</ol>";
}
function name() {
    if (my.name == null) {
        window.location.assign(window.location.href);
    } else if (my.name == "") {
        my.name = window.prompt("이름을 입력하세요", "홍길동");
        window.name();
    } else {
        my.studno = window.prompt("학번을 입력하세요", "10101");
        window.studno();
    }
}
function studno() {
    if (my.studno == null) {
        window.location.assign(window.location.href);
    } else if (my.studno.length === 5) {
        window.startpage();
    } else {
        my.studno = window.prompt("학번을 입력하세요", "10101");
        window.studno();
    }
}
function startpage() {
    for (i = 0; i < MemberList.length; i++) {
        if (MemberList[i].name === my.name) {
            if (MemberList[i].studno === my.studno) {
                document.write(my.name + "님 반가워요")
                return;
            } else {
                result = "페이지 접근 권한이 없습니다.";
            }
        } else {
            result = "페이지 접근 권한이 없습니다.";
        }
    }
    alert(result);
    window.location.assign(window.location.href);
}