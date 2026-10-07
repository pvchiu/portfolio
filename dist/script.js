const projects={
 inbox:{category:'DỰ ÁN CÁ NHÂN · APPLIED AI',title:'Inbox Triage Agent',summary:'Trợ lý email sử dụng FastAPI và LLM function calling để phân loại, tóm tắt và hỗ trợ xử lý Gmail.',details:['Phân loại và tóm tắt email thành bốn nhóm ưu tiên.','Triển khai cơ chế hybrid AI + rule-based fallback khi LLM gặp lỗi hoặc giới hạn tần suất.','Tích hợp Gmail và Google Calendar API qua OAuth 2.0.','Tạo bản nháp trả lời và tự động tạo sự kiện cho hạn chót hoặc lịch hẹn.'],stack:['Python','FastAPI','Next.js','TypeScript','Groq / Gemini API','Google OAuth 2.0','Gmail & Calendar API','SQLite']},
 ielts:{category:'ĐỒ ÁN TỐT NGHIỆP · NHÓM 5 THÀNH VIÊN · 05–08.2026',title:'IELTS Learning & Management System',summary:'Hệ thống web quản lý khóa học, lớp học, học liệu, kỳ thi, người dùng và các hoạt động đào tạo.',details:['Phát triển backend quản lý khóa học bằng ASP.NET Core và Entity Framework Core.','Xây dựng chức năng quản lý và tổ chức học liệu trong khóa học.','Phát triển dịch vụ quản lý người dùng, phụ huynh và logic nghiệp vụ liên quan.','Tham gia thảo luận, đóng góp ràng buộc xếp lịch cho module Google OR-Tools CP-SAT: giáo viên, phòng, khung giờ, thời gian khả dụng và xung đột.'],stack:['C#','ASP.NET Core','Entity Framework Core','SQL Server','Google OR-Tools']},
 food:{category:'DỰ ÁN THỰC TẬP · FULL-STACK · 05–08.2025',title:'FastFood E-commerce Platform',summary:'Nền tảng thương mại điện tử được phát triển trong kỳ thực tập, với các chức năng backend bằng Java và Spring Boot.',details:['Xây dựng chức năng sản phẩm, giỏ hàng, đơn hàng và người dùng.','Sử dụng Spring Security cho đăng nhập, phân quyền và xác thực OAuth2.','Quản lý dữ liệu ứng dụng bằng Spring Data JPA và MySQL.','Tích hợp cổng VNPay cho thanh toán trực tuyến.'],stack:['Java','Spring Boot','Spring Data JPA','MySQL','Spring Security','OAuth2','VNPay']}
};
const dialog=document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const project=(currentLang==='en'?projectsEn:projects)[button.dataset.project];document.getElementById('dialog-title').textContent=project.title;document.getElementById('dialog-category').textContent=project.category;document.getElementById('dialog-summary').textContent=project.summary;document.getElementById('dialog-details').replaceChildren(...project.details.map(text=>{const li=document.createElement('li');li.textContent=text;return li}));document.getElementById('dialog-stack').replaceChildren(...project.stack.map(text=>{const tag=document.createElement('span');tag.textContent=text;return tag}));dialog.showModal();document.body.classList.add('modal-open')}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));dialog.addEventListener('click',e=>{const box=dialog.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)dialog.close()});
const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',currentLang==='en'?'Open menu':'Mở menu');menu.querySelector('span').textContent='+'}menu.addEventListener('click',()=>{const isOpen=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!isOpen));menu.setAttribute('aria-label',currentLang==='en'?(isOpen?'Open menu':'Close menu'):(isOpen?'Mở menu':'Đóng menu'));nav.classList.toggle('open',!isOpen);menu.querySelector('span').textContent=isOpen?'+':'−'});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
document.getElementById('copy-email').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('chieupham1011@gmail.com');status.textContent=currentLang==='en'?'Email address copied.':'Đã sao chép địa chỉ email.'}catch{status.textContent=currentLang==='en'?'Email: chieupham1011@gmail.com — select the address above to copy it.':'Email: chieupham1011@gmail.com — bạn có thể chọn và sao chép địa chỉ phía trên.'}});document.getElementById('year').textContent=new Date().getFullYear();

const translations = {
 'Đến nội dung chính':'Skip to main content',
 'Giới thiệu':'About', 'Dự án':'Projects', 'Kinh nghiệm':'Experience', 'Kết nối':'Let’s connect',
 'SOFTWARE DEVELOPER · HÀ NỘI, VIỆT NAM':'SOFTWARE DEVELOPER · HANOI, VIETNAM',
 'Khám phá tiềm năng AI.':'Exploring the potential of AI.',
 'Tôi xây dựng API, phát triển hệ thống backend và ứng dụng AI để giải quyết những bài toán thực tế.':'I build APIs, develop backend systems, and apply AI to solve real-world problems.',
 'Khám phá dự án':'Explore project', 'Tải CV':'Download CV', 'TẬP TRUNG VÀO':'MY FOCUS',
 'Logic vững chắc.':'Sound logic.', 'Giải pháp thực tiễn.':'Practical solutions.',
 '01 — GIỚI THIỆU':'01 — INTRODUCTION', 'Tìm hiểu thêm':'Get to know me', 'Đôi nét về tôi':'A little about me',
 'Từ những dòng code':'From lines of code', 'đến':'to', 'giải pháp hữu ích.':'meaningful solutions.',
 'Tôi là Phạm Văn Chiêu, tốt nghiệp ngành Kỹ thuật Phần mềm tại Đại học FPT. Kỳ thực tập tại FPT Academy giúp tôi xây dựng nền tảng phát triển backend với Java, Spring Boot và cơ sở dữ liệu.':'I’m Phạm Văn Chiêu, a Software Engineering graduate from FPT University. My internship at FPT Academy gave me a foundation in backend development with Java, Spring Boot, and databases.',
 'Tôi quan tâm đến cách AI và thuật toán có thể giải quyết vấn đề thực tế. Từ hệ thống thương mại điện tử đến trợ lý email, tôi luôn tìm cơ hội để học hỏi và biến ý tưởng thành sản phẩm hoạt động.':'I’m interested in how AI and algorithms can solve practical problems. From e-commerce systems to an email assistant, I look for opportunities to learn and turn ideas into working software.',
 'Dự án trong CV':'Projects in my CV', 'Đại học · 2022–2026':'University · 2022–2026', 'Định hướng phát triển':'Career focus',
 'Dự án tiêu biểu':'Selected projects', 'Ý TƯỞNG. CÔNG NGHỆ. THỰC THI.':'IDEAS. TECHNOLOGY. EXECUTION.',
 'TỪ HỘP THƯ ĐẾN HÀNH ĐỘNG':'FROM INBOX TO ACTION', 'Ít nhiễu hơn.':'Less noise.', 'Đúng ưu tiên hơn.':'Clearer priorities.',
 'Phân loại email':'Classify emails', 'Tóm tắt nội dung':'Summarize content', 'Soạn nháp & lên lịch':'Draft replies & schedule',
 '01 / DỰ ÁN CÁ NHÂN':'01 / PERSONAL PROJECT', 'Trợ lý email ứng dụng AI':'AI-powered email assistant',
 'Phân loại và tóm tắt Gmail theo bốn mức ưu tiên. Kết hợp AI với cơ chế dự phòng theo quy tắc, hỗ trợ tạo bản nháp trả lời và sự kiện lịch.':'Classify and summarize Gmail messages into four priority levels. Combines AI with a rule-based fallback and supports reply drafts and calendar events.',
 'Học tập có tổ chức.':'Learning, organized.', 'Khóa học':'Courses', 'Học liệu':'Materials', 'Người dùng':'Users', 'Lịch học':'Scheduling',
 '02 / ĐỒ ÁN TỐT NGHIỆP':'02 / GRADUATION PROJECT',
 'Hệ thống quản lý học tập, khóa học và học liệu. Phát triển backend và đóng góp các ràng buộc cho bài toán xếp lịch.':'A system for managing learning, courses, and materials. Developed backend services and contributed constraints to the scheduling module.',
 'Từ giỏ hàng':'From shopping cart', 'đến thanh toán.':'to checkout.', 'Sản phẩm':'Products', 'Đơn hàng':'Orders',
 '03 / DỰ ÁN THỰC TẬP':'03 / INTERNSHIP PROJECT',
 'Backend thương mại điện tử với sản phẩm, giỏ hàng, đơn hàng, phân quyền người dùng và thanh toán trực tuyến VNPay.':'E-commerce backend with products, shopping carts, orders, user roles, and online payments through VNPay.',
 'Hành trình':'My journey', 'KINH NGHIỆM':'EXPERIENCE', 'HỌC VẤN':'EDUCATION',
 'Thực hành phát triển backend bằng Java và Spring Boot. Xây dựng REST API, làm việc với cơ sở dữ liệu và Spring Data JPA; phối hợp cùng đội nhóm để phát triển, kiểm thử và cải thiện các tính năng.':'Practiced backend development with Java and Spring Boot. Built REST APIs, worked with databases and Spring Data JPA, and collaborated with the team to develop, test, and improve features.',
 'Kỹ thuật Phần mềm':'Software Engineering', 'Đại học FPT':'FPT University',
 'Đồ án tốt nghiệp: IELTS Learning & Management System, nhóm 5 thành viên.':'Graduation project: IELTS Learning & Management System, a team of 5.',
 'Công nghệ & kỹ năng':'Technologies & skills', 'BỘ CÔNG CỤ CỦA TÔI':'MY TOOLKIT', 'Data & công cụ':'Data & tools', 'AI & tích hợp':'AI & integrations',
 '05 / CÙNG KẾT NỐI':'05 / LET’S CONNECT', 'HÀ NỘI, VIỆT NAM':'HANOI, VIETNAM',
 'Một cuộc trò chuyện.':'One conversation.', 'Nhiều khả năng mới.':'New possibilities.',
 'Tôi mong muốn trao đổi về cơ hội phát triển phần mềm,':'I’d love to talk about software development opportunities,',
 'các dự án backend và những ứng dụng AI thực tiễn.':'backend projects, and practical applications of AI.',
 'Sao chép email':'Copy email', 'Về đầu trang ↑':'Back to top ↑', 'Phần việc & chức năng':'Contributions & features',
 'Công nghệ sử dụng':'Technology stack', 'Xem hồ sơ GitHub':'View GitHub profile'
};
const projectsEn={
 inbox:{category:'PERSONAL PROJECT · APPLIED AI',title:'Inbox Triage Agent',summary:'An email assistant built with FastAPI and LLM function calling to classify, summarize, and help process Gmail messages.',details:['Classifies and summarizes email into four priority categories.','Implements a hybrid AI + rule-based fallback for LLM failures and rate-limit events.','Integrates Gmail and Google Calendar APIs using OAuth 2.0.','Generates reply drafts and automatically creates deadline or appointment events.'],stack:projects.inbox.stack},
 ielts:{category:'GRADUATION PROJECT · TEAM OF 5 · MAY–AUG 2026',title:'IELTS Learning & Management System',summary:'A web-based system for managing courses, classes, learning materials, exams, users, and academic activities.',details:['Developed course management backend services with ASP.NET Core and Entity Framework Core.','Built functions to manage and organize learning materials within courses.','Developed user and parent management services and related business logic.','Contributed scheduling constraints in team discussions for the Google OR-Tools CP-SAT module, including teachers, rooms, time slots, availability, and conflicts.'],stack:projects.ielts.stack},
 food:{category:'INTERNSHIP PROJECT · FULL-STACK · MAY–AUG 2025',title:'FastFood E-commerce Platform',summary:'An e-commerce platform developed during an internship, with backend features built using Java and Spring Boot.',details:['Built product, cart, order, and user features.','Used Spring Security for login, user roles, and OAuth2 authentication.','Managed application data with Spring Data JPA and MySQL.','Integrated VNPay for online payments.'],stack:projects.food.stack}
};
const savedPreference=key=>{try{return localStorage.getItem(key)}catch{return null}};
const savePreference=(key,value)=>{try{localStorage.setItem(key,value)}catch{}};
let currentLang=savedPreference('chieu-language')==='en'?'en':'vi';
const textNodes=[];
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){return node.parentElement.closest('script,style')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});
while(walker.nextNode()){const node=walker.currentNode;const source=node.textContent;const key=source.trim();if(translations[key])textNodes.push({node,source,key})}
const attributes=[
 ['.logo','aria-label','Trang đầu','Back to top'],
 ['.header nav','aria-label','Điều hướng chính','Main navigation'],
 ['.inbox-visual','aria-label','Các chức năng của dự án Inbox Triage Agent','Inbox Triage Agent features'],
 ['.dialog-close','aria-label','Đóng chi tiết dự án','Close project details']
];
function updateThemeLabel(){const dark=document.documentElement.dataset.theme==='dark';const button=document.getElementById('theme-toggle');const label=currentLang==='en'?(dark?'Switch to light mode':'Switch to dark mode'):(dark?'Chuyển sang giao diện sáng':'Chuyển sang giao diện tối');button.setAttribute('aria-label',label);button.setAttribute('title',label);button.setAttribute('aria-pressed',String(dark));document.querySelector('meta[name="theme-color"]').content=dark?'#10151e':'#ffffff'}
function setLanguage(lang){currentLang=lang;document.documentElement.lang=lang;textNodes.forEach(({node,source,key})=>{node.textContent=lang==='en'?source.replace(key,translations[key]):source});document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));attributes.forEach(([selector,attr,vi,en])=>document.querySelectorAll(selector).forEach(el=>el.setAttribute(attr,lang==='en'?en:vi)));menu.setAttribute('aria-label',lang==='en'?(nav.classList.contains('open')?'Close menu':'Open menu'):(nav.classList.contains('open')?'Đóng menu':'Mở menu'));document.querySelector('.hero .primary').textContent=lang==='en'?'Explore my work':'Khám phá dự án';document.querySelector('meta[name="description"]').content=lang==='en'?'Portfolio of Phạm Văn Chiêu, a software developer in Hanoi working with Java, Spring Boot, FastAPI, and applied AI.':'Portfolio của Phạm Văn Chiêu, kỹ sư phần mềm tại Hà Nội với kinh nghiệm Java, Spring Boot, FastAPI và ứng dụng AI.';document.getElementById('copy-status').textContent='';updateThemeLabel();savePreference('chieu-language',lang)}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
document.getElementById('theme-toggle').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;savePreference('chieu-theme',theme);updateThemeLabel()});
setLanguage(currentLang);

