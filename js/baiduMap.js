
// 百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map实例

var point = new BMap.Point(116.238054, 40.218142)
map.centerAndZoom(point, 16)
var opts = {
position : point,    // 指定文本标注所在的地理位置
offset   : new BMap.Size(-90, -40)    //设置文本偏移量
}
var label = new BMap.Label("北京市昌平区鼓楼北街商业综合街101", opts);  // 创建文本标注对象
    label.setStyle({
        color : "#000",
        fontSize : "0.125rem",
        height : "0.2083rem",
        lineHeight : "0.2083rem",
        fontFamily:"微软雅黑"
    });
map.addOverlay(label);



// // 向地图添加标注

    var myIcon = new BMap.Icon("https://api.map.baidu.com/images/marker_red_sprite.png", new BMap.Size(23, 25));

    // 创建标注对象并添加到地图 
    var marker = new BMap.Marker(point,{icon: myIcon});
    map.addOverlay(marker);





map.centerAndZoom(new BMap.Point(116.238058, 40.21807), 14)  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
mapTypes:[
    BMAP_NORMAL_MAP,
    BMAP_HYBRID_MAP
]}));	  
map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放



