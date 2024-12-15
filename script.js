let result = "5678" //สุ่มจริงแล้วพิมพ์ลงในนี้

//ขอโทษเด้ออามาไน ที่หลอกกัน

function num_ran_a() {
    let a = ' ';
    const randomDigit = Math.floor(Math.random()*7);
    a += randomDigit.toString();
    return a
}
function display_a() {
    display_b()
    display_c()
    display_d()
    let elapsedTime = 0; // ตัวแปรนับเวลา
            const intervalTime = 100; // ดีเลย์ในการสุ่มทุก 0.1 วิ
            const totalTime = 5000; // สุ่มทั้งหมด 5 วิ
            const intervalId = setInterval(function() {
                const random_a = num_ran_a();
                document.getElementById('1').textContent = random_a;
                elapsedTime += intervalTime;

                // เมื่อครบ 5 วินาที, หยุดการสุ่ม
                if (elapsedTime >= totalTime) {
                    clearInterval(intervalId);
                    document.getElementById('1').textContent = result[0];
                }
            }, intervalTime); // ดีเลย์ 0.1 วินาที ยิ่งน้อยเลขยิ่งสับไว
}
function num_ran_b() {
    let b = ' ';
    const randomDigit = Math.floor(Math.random()*10);
    b += randomDigit.toString();
    return b
}
function display_b() {
    let elapsedTime = 0; // ตัวแปรนับเวลา
    const intervalTime = 100; // ดีเลย์ในการสุ่มทุก 0.1 วิ
    const totalTime = 8000; // สุ่มทั้งหมด 8 วิ
    const intervalId = setInterval(function() {
        const random_b = num_ran_b();
        document.getElementById('2').textContent = random_b;
        elapsedTime += intervalTime;

        // เมื่อครบ 8 วินาที, หยุดการสุ่ม
        if (elapsedTime >= totalTime) {
            clearInterval(intervalId);
            document.getElementById('2').textContent = result[1];
        }
    }, intervalTime); // ดีเลย์ 0.1 วินาที ยิ่งน้อยเลขยิ่งสับไว
}
function num_ran_c() {
    let c = ' ';
    const randomDigit = Math.floor(Math.random()*10);
    c += randomDigit.toString();
    return c
}
function display_c() {
    let elapsedTime = 0; // ตัวแปรนับเวลา
    const intervalTime = 100; // ดีเลย์ในการสุ่มทุก 0.1 วิ
    const totalTime = 12000; // สุ่มทั้งหมด 12 วิ
    const intervalId = setInterval(function() {
        const random_c = num_ran_c();
        document.getElementById('3').textContent = random_c;
        elapsedTime += intervalTime;

        // เมื่อครบ 12 วินาที, หยุดการสุ่ม
        if (elapsedTime >= totalTime) {
            clearInterval(intervalId);
            document.getElementById('3').textContent = result[2];
        }
    }, intervalTime); // ดีเลย์ 0.1 วินาที ยิ่งน้อยเลขยิ่งสับไว
}
function num_ran_d() {
    let d = ' ';
    const randomDigit = Math.floor(Math.random()*10);
    d += randomDigit.toString();
    return d
}
function display_d() {
    let elapsedTime = 0; // ตัวแปรนับเวลา
    const intervalTime = 100; // ดีเลย์ในการสุ่มทุก 0.1 วิ
    const totalTime = 20000; // สุ่มทั้งหมด 20 วิ
    const intervalId = setInterval(function() {
        const random_c = num_ran_c();
        document.getElementById('4').textContent = random_c;
        elapsedTime += intervalTime;
        // ถ้าผ่าน 20 วินาทีแล้ว, หยุดการสุ่ม
        if (elapsedTime >= totalTime) {
            clearInterval(intervalId);
            document.getElementById('4').textContent = result[3];
        }
    }, intervalTime); // ดีเลย์ 0.1 วินาที ยิ่งน้อยเลขยิ่งสับไว
}