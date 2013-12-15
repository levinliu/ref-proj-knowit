function cleanchart(canid){
   var obj = document.getElementById(canid).getContext('2d');
    obj.clearRect(0,0,500,300);
}
/**
*funciont:    ���Ʊ�״ͼ
*/
function drawpie() {
    var canid = "pie";
    var labels = ["A","B","C"];
    var data = [10,30,80];
    var key = ["a","b","c"];
    var pie = new RGraph.Pie(canid,data);
    pie.Set('chart.labels',labels);
    pie.Set('chart.key',key);
    pie.Set('chart.linewidth', 1);
    pie.Set('chart.stroke', 'white');
    pie.Set('chart.exploded', 5);
    pie.Set('chart.gutter.left', 45); //�趨�������λ��
    pie.Set('chart.shadow', true);
    pie.Set('chart.key.position.gutter.boxed', true); //ͼ����ʽ�����Ժ���������ͼ�ζԱȲ��
    pie.Set('chart.key.shadow.offsetx', 7);
    pie.Set('chart.key.shadow.offsety', 7);
   // pie.Set('chart.centerx',100); //���ñ�״ͼ���� X ����
    pie.Draw();
    document.getElementById("pie").onclick = function (e)
    {
        var src = (document.all ? event.srcElement : e.target);
    
        // The RGraph object constructors add __object__ to the canvas.
        var myPie = src.__object__;
       
        console.log("myPie.angles ["+myPie.angles+"] myPie.data ["+myPie.data+"]");
        console.log("getSegment ["+myPie.getSegment(e)+"]");
        document.getElementById("disp").html = "abd";
        document.body.bgColor="yellow"
    }
};
/**
 *
 * ������״ͼ
 * 
 **/

function drawbar() {
    var canid = "bar";
    var labels = ["A","B","C"];
    var data = [[10,20,15],[1,20,31],[41,14,23],[9,14,50],[55,12,33]];
    var key = ["key1","key2","key3"];
    var bar = new RGraph.Bar(canid,data);
    bar.Set('chart.labels',labels);
    bar.Set('chart.key',key);
    bar.Set('chart.gutter.left',45);
    bar.Set('chart.colors',['red','blue','green']); //�趨��״��ɫ
    bar.Set('chart.key.position', 'gutter');
    bar.Set('chart.variant', '3d'); //��Ϊ����ģʽ
    bar.Set('chart.units.post', 'w'); //�趨Y�ᵥλ
    bar.Set('chart.key.position.gutter.boxed', false);
    bar.Draw();
};

/**
 *
 * ��������ͼ
 *  
 **/

function drawline() {
    var canid = 'line';
    var data = [[20,70,80,10,20,0],[120,45,8,10,120,10],[60,44,50,71,120,80]];
    var labels = ["A","B","C","D","E","F"];
    var key = ["key1","key2","key3"];
    var line = new RGraph.Line(canid,data[0],data[1],data[2]);
    line.Set('chart.labels', labels);
    line.Set('chart.colors', ['red', 'green', 'blue']);
    line.Set("chart.linewidth", 2);
    line.Set('chart.gutter.left', 35);
    line.Set('chart.title', "");
    line.Set('chart.curvy', 0); //���� �ߵ�Բ����
    //    line.Set('chart.curvy.factor', 0.25);
    line.Set('chart.background.grid.hlines', true); // ���ñ������� ���� ��ʾ
    // line.Set('chart.background.grid.autofit.numvlines', 11);
    // line.Set('chart.background.grid.border', false);
    line.Set('chart.key',key);
    line.Set('chart.key.position', 'gutter');
    line.Set('chart.key.position.gutter.boxed', false);
    line.Set('chart.tickmarks', 'circle'); //�趨�۵���ʽ 
    line.Draw();
};

