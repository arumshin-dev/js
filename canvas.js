const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200);//x,y,width,height사각형 그려서 채움
ctx.rect(150, 250, 100, 100);//x,y,width,height사각형 그림
ctx.fill();//채워줘야지 화면에 나타남

ctx.beginPath();//끊어줌
ctx.rect(250, 350, 100, 100);
ctx.fillStyle='red';//색 바끔
/*setTimeout(() =>(
    ctx.fill()
  ),1000);*/
ctx.fill();

ctx.beginPath();//끊어줌
ctx.fillStyle='pink';
ctx.moveTo(500,500);//이동하고
ctx.lineTo(600,500);//선그림
ctx.lineTo(600,600);
ctx.lineTo(500,600);
ctx.lineTo(500,500);
//ctx.stroke();//선 만듬-화면에 나타남
ctx.fill();//색 채움


//집모양
ctx.beginPath();
ctx.fillRect(400,200,50,200);
ctx.fillRect(700,200,50,200);
ctx.fillRect(550,300,50,100);
ctx.moveTo(400,200);
ctx.lineTo(750,200);
ctx.lineTo(575,100);
ctx.lineTo(400,200);
//ctx.stroke();
ctx.fill();