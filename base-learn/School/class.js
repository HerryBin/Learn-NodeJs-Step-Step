/**
 * Created by xianrongbin on 2017/7/18.
 */
let student = require('./student');
let teacher = require('./teacher');


function add(teacherName, students) {
    teacher.add(teacherName);
    students.forEach((item) => {
        student.add(item);
    });
}

add('jack', ['Tom', 'Jerry']);