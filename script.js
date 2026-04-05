/* ==================== JavaScript 基础知识 ====================
 * JavaScript 是一种编程语言，用来给网页添加交互功能
 * 它可以：
 * 1. 获取和修改 HTML 元素
 * 2. 响应用户操作（点击、输入等）
 * 3. 动态改变页面内容和样式
 * 4. 处理数据和逻辑
 */

/* ==================== 第一步：获取页面元素 ==================== */
// 使用 document.getElementById() 方法获取 HTML 元素
// document 是整个网页文档对象
// getElementById() 通过 id 查找元素，返回找到的元素对象

const confession = document.getElementById('confession');
// 获取表白页面的容器

const success = document.getElementById('success');
// 获取成功页面的容器

const yesBtn = document.getElementById('yes');
// 获取"可以"按钮

const noBtn = document.getElementById('no');
// 获取"不要"按钮

const questionText = document.getElementById('question');
// 获取表白问题的标题

const mainImage = document.getElementById('mainImage');
// 获取主图片

const successText = document.getElementById('successText');
// 获取成功页面的文字

const clickThenBtn = document.getElementById('clickThenBtn');
// 逐次点击的按钮

const finalPage = document.getElementById('finalPage');
// 终极页面容器

const finalImage = document.getElementById('finalImage');
// 终极页面图片（可替换为上传后的新图片）

/* ==================== 第二步：URL 参数处理 ==================== */
// URL 参数是网址中 ? 后面的部分，例如：https://example.com?name=小明
// 我们可以通过 URL 参数直接跳转到表白页面

/* ==================== 第二步：页面初始化 ==================== */
// 直接显示表白页面，不使用名字来源
questionText.innerText = '赵一溥是小狗吗？';
confession.style.display = 'block';
// 不再显示第一个页面，直接打开第二个页面

/* ==================== 第五步：No 按钮的挤压效果 ==================== */
// 这是整个项目最有趣的部分！
// 每次点击"不要"按钮，都会发生一些变化

let clickCount = 0;
// let 声明变量，表示这个变量的值可以改变
// clickCount 用来记录点击"不要"按钮的次数

const noTexts = [
    // 数组（Array）：用来存储多个值
    // 数组的索引从 0 开始
    "？你认真的吗…",      // 索引 0
    "要不再想想？",        // 索引 1
    "不许选这个！",        // 索引 2
    "快选另一个！！",        // 索引 3
    "不行:(",             // 索引 4
];
// 这个数组存储了每次点击时按钮要显示的文字

noBtn.addEventListener('click', () => {
    // 监听"不要"按钮的点击事件
    
    clickCount++;
    // ++ 是自增运算符，表示 clickCount = clickCount + 1
    // 每次点击，计数器加 1
    
    // ========== 让 Yes 按钮变大 ==========
    const yesSize = 1 + clickCount * 1.2;
    // 计算 Yes 按钮的缩放比例
    // 第 1 次点击：1 + 1 * 1.2 = 2.2（放大到 2.2 倍）
    // 第 2 次点击：1 + 2 * 1.2 = 3.4（放大到 3.4 倍）
    // 以此类推，每次增加 1.2 倍
    
    yesBtn.style.transform = `scale(${yesSize})`;
    // transform 是 CSS 变换属性
    // scale() 用来缩放元素
    // scale(2) 表示放大到 2 倍
    
    // ========== 让 No 按钮右移 ==========
    const noOffset = clickCount * 50;
    // 计算 No 按钮的移动距离
    // 第 1 次点击：1 * 50 = 50px
    // 第 2 次点击：2 * 50 = 100px
    // 每次向右移动 50px
    
    noBtn.style.transform = `translateX(${noOffset}px)`;
    // translateX() 用来水平移动元素
    // translateX(50px) 表示向右移动 50px
    // 负值表示向左移动
    
    // ========== 让图片和文字上移 ==========
    const moveUp = clickCount * 25;
    // 计算上移距离，每次 25px
    
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;
    // translateY() 用来垂直移动元素
    // 负值表示向上移动，正值表示向下移动
    
    // ========== 更新 No 按钮的文字 ==========
    if (clickCount <= noTexts.length) {
        // 如果点击次数不超过数组长度（5 次）
        
        noBtn.innerText = noTexts[clickCount - 1];
        // 从数组中取出对应的文字
        // 注意：数组索引从 0 开始，所以要用 clickCount - 1
        // 第 1 次点击：noTexts[0] = "？你认真的吗…"
        // 第 2 次点击：noTexts[1] = "要不再想想？"
    }
    
    // ========== 更新图片 ==========
    const images = {
        // 对象（Object）：用来存储键值对
        // 键（key）是数字，值（value）是图片路径
        1: "assets/images/shocked.webp",   // 第 1 次点击：震惊
        2: "assets/images/think.webp",     // 第 2 次点击：思考
        3: "assets/images/angry.webp",     // 第 3 次点击：生气
        4: "assets/images/crying.webp",    // 第 4 次点击：哭泣
    };
    
    if (images[clickCount]) {
        // 如果对象中有对应的图片
        // images[clickCount] 用方括号访问对象的属性
        
        mainImage.src = images[clickCount];
        // src 是图片的路径属性，修改它可以更换图片
        
    } else if (clickCount >= 5) {
        // 如果点击次数 >= 5，一直显示哭泣的图片
        
        mainImage.src = "assets/images/crying.webp";
    }
});

/* ==================== 第六步：Yes 按钮事件 ==================== */
// 当用户点击"可以"按钮时，进入表白成功页面

yesBtn.addEventListener('click', () => {
    // 监听"可以"按钮的点击事件

    successText.innerText = '我就知道你是小狗！';
    // 固定文本，名字来源已去掉

    // 切换到成功页面
    confession.style.display = 'none';
    success.style.display = 'flex';
    // 显示成功页面，使用 flex 布局让内容居中

    document.body.style.overflow = 'hidden';
    // 禁止页面滚动
});
/* ==================== 第七步：成功页面交互按钮（4次） ==================== */
let clickThenCount = 0;
clickThenBtn.addEventListener('click', () => {
    clickThenCount++;

    if (clickThenCount === 1) {
        clickThenBtn.innerText = '这里有个小秘密要告诉你';
    } else if (clickThenCount === 2) {
        clickThenBtn.innerText = '你确定想知道吗？';
    } else if (clickThenCount === 3) {
        clickThenBtn.innerText = '你真的确定吗？';
    } else {
        // 第四次及之后：跳转到终极页面
        success.style.display = 'none';
        finalPage.style.display = 'flex';

        // 保持背景与前面一致（可通过 CSS .container 统一）
        document.body.style.overflow = 'hidden';

        // 如果你稍后上传了图片，保留封面元素，当前可从 assets/images/placeholder.webp 替换
        finalImage.src = 'assets/images/喜欢.jpg';

        clickThenBtn.disabled = true;
    }
});
/* ==================== 总结 ====================
 * 这个 JavaScript 文件实现了以下功能：
 * 
 * 1. 页面切换：通过修改 display 属性来显示/隐藏不同的页面
 * 
 * 2. URL 参数处理：
 *    - 使用 URLSearchParams 解析 URL 参数
 *    - 使用 history.pushState() 更新 URL（不刷新页面）
 * 
 * 3. 事件监听：
 *    - 使用 addEventListener() 监听按钮点击
 *    - 使用箭头函数定义事件处理函数
 * 
 * 4. DOM 操作：
 *    - 使用 getElementById() 获取元素
 *    - 使用 innerText 修改文本内容
 *    - 使用 style 属性修改 CSS 样式
 *    - 使用 value 获取/设置输入框的值
 *    - 使用 src 修改图片路径
 * 
 * 5. 动画效果：
 *    - 使用 transform 属性实现缩放（scale）和移动（translate）
 *    - 通过计数器实现渐进式的动画效果
 * 
 * 6. 数据结构：
 *    - 使用数组存储多个文字
 *    - 使用对象存储键值对（点击次数 -> 图片路径）
 * 
 * 7. 条件判断：
 *    - 使用 if/else 根据不同情况执行不同的代码
 *    - 使用 && 和 || 进行逻辑运算
 * 
 * 学习建议：
 * - 可以尝试修改数字（如缩放比例、移动距离）看看效果
 * - 可以添加更多的图片和文字
 * - 可以尝试添加新的功能，比如音乐、更多动画等
 */
