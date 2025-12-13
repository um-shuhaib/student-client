import commonApi from "./commonApi";

export const listStudents=()=>{
    return commonApi("http://127.0.0.1:8000/student/","GET","")
}