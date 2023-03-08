PassWord = "대현22";
TeacherList = [
    { name: "남지훈", pw: PassWord },
];
MemberList = [
    { name: "김동현", studno: "10106" },
    { name: "김은호", studno: "10206" },
    { name: "정지욱", studno: "10223" },
    { name: "엄찬우", studno: "10317" },
    { name: "김훈", studno: "10414" },
    { name: "박진기", studno: "10417" },
    { name: "방세현", studno: "10418" },
    { name: "한정훈", studno: "10428" },
    { name: "류승원", studno: "10710" },
    { name: "안재현", studno: "10716" },
];
if (window.confirm("대현고등학교 학생입니까?")) {
    var my = {};
    my.name = window.prompt("이름을 입력하세요", "홍길동");
    window.name();
} else if (window.confirm("페이지 관리자입니까?")) {
    var my = {};
    my.name = window.prompt("이름을 입력하세요", "홍길동");
    window.TeacherName();
} else {
    window.location.assign(window.location.href);
    alert("이 페이지는 대현고등학교 전용 페이지입니다.");
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
                document.write(my.name + "님 반가워요");
                window.teacherlist();
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
function teacherlist(obj) {
    let Teachers;
    Teachers = "총 " + TeacherList.length + "명";
    for (i = 0; i < TeacherList.length; i++) {
        Teachers += "<li>" + TeacherList[i].name + "</li>";
    }
    for (i = 0; i < TeacherList.length; i++) {
        if (TeacherList[i].name === my.name) {
            if (TeacherList[i].pw === my.pw) {
                obj.innerHTML = "관리자 목록";
                obj.innerHTML += "<ol>" + Teachers + "</ol>";
                return;
            } else {
                obj.innerHTML = "관리자 목록<ol><li>접근 권한이 없습니다.</li></ol>";
            }
        } else {
            obj.innerHTML = "관리자 목록<ol><li>접근 권한이 없습니다.</li></ol>";
        }
    }
}
function mOver(obj) {
    obj.innerHTML = "동아리 면접자 명단";
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
                document.write(my.name + "님 반가워요");
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