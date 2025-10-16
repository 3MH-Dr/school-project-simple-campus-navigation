# school-project-simple-campus-navigation
a simple campus navigation for school project  
本项目是一个基于 Python Flask 后端与 原生 HTML/CSS/JavaScript 前端实现的路径规划与可视化系统。  
用户可以通过交互式页面选择起点、途经点和终点，选择出行方式（步行/骑行），系统会根据Dijkstra算法计算最优路径并在地图上动态展示。  

# 技术栈
前端：  
原生 HTML + CSS + JavaScript  
调用百度地图 API 实现路径可视化  
Fetch 实现前后端数据通信  
自适应布局，支持桌面端与移动端显示  

后端：  
Python 3.10  
Flask 轻量级框架  
JSON 数据通信  
路径规划算法模块（可扩展为Dijkstra、A*等）  

# 克隆项目
git clone https://github.com/3MH-Dr/school-project-simple-campus-navigation.git  
cd school-project-simple-campus-navigation

# 安装依赖
pip install -r requirements.txt  
将index文件中的密匙替换为个人百度api密匙  
 <script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=您的密钥"></script>

