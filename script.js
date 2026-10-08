const projects={
 inbox:{category:'DỰ ÁN CÁ NHÂN · FULL-STACK & AI',title:'Inbox Triage Agent',summary:'Trợ lý email ứng dụng FastAPI và LLM function calling để phân loại, tóm tắt và hỗ trợ xử lý Gmail tự động.',details:['Phân loại và tóm tắt email thành bốn nhóm ưu tiên.','Triển khai cơ chế hybrid AI + rule-based fallback khi LLM gặp lỗi hoặc giới hạn tần suất.','Tích hợp Gmail API và xác thực Google OAuth 2.0.','Tự động trích xuất ngữ cảnh và khởi tạo bản nháp trả lời thông minh.'],stack:['Python','FastAPI','Next.js','TypeScript','Groq / Gemini API','Google OAuth 2.0','Gmail API','SQLite'],github:'https://github.com/pvchiu/Inbox-Triage-Agent'},
 ielts:{category:'ĐỒ ÁN TỐT NGHIỆP · NHÓM 5 THÀNH VIÊN · 05–08.2026',title:'IELTS Learning & Management System',summary:'Hệ thống web Full-Stack quản lý khóa học, lớp học, học liệu, kỳ thi, người dùng và các hoạt động đào tạo.',details:['Phát triển backend quản lý khóa học bằng ASP.NET Core và Entity Framework Core.','Xây dựng chức năng quản lý và tổ chức học liệu trong khóa học.','Phát triển dịch vụ quản lý người dùng, phụ huynh và logic nghiệp vụ liên quan.','Tham gia thảo luận, đóng góp ràng buộc xếp lịch cho module Google OR-Tools CP-SAT: giáo viên, phòng, khung giờ, thời gian khả dụng và xung đột.'],stack:['C#','ASP.NET Core','Entity Framework Core','SQL Server','Google OR-Tools'],github:'https://github.com/manhnguyenduc153/SEP490-G31'},
 food:{category:'DỰ ÁN THỰC TẬP · FULL-STACK · 05–08.2025',title:'FastFood E-commerce Platform',summary:'Nền tảng thương mại điện tử Full-Stack phát triển trong kỳ thực tập, với đầy đủ quy trình đặt hàng và thanh toán.',details:['Xây dựng chức năng sản phẩm, giỏ hàng, đơn hàng và người dùng.','Sử dụng Spring Security cho đăng nhập, phân quyền và xác thực OAuth2.','Quản lý dữ liệu ứng dụng bằng Spring Data JPA và MySQL.','Tích hợp cổng VNPay cho thanh toán trực tuyến.'],stack:['Java','Spring Boot','Spring Data JPA','MySQL','Spring Security','OAuth2','VNPay'],github:'https://github.com/pvchiu/FastFood-E-commerce-Platform'}
};

const dialog=document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const project=(currentLang==='en'?projectsEn:projects)[button.dataset.project];document.getElementById('dialog-title').textContent=project.title;document.getElementById('dialog-category').textContent=project.category;document.getElementById('dialog-summary').textContent=project.summary;document.getElementById('dialog-details').replaceChildren(...project.details.map(text=>{const li=document.createElement('li');li.textContent=text;return li}));document.getElementById('dialog-stack').replaceChildren(...project.stack.map(text=>{const tag=document.createElement('span');tag.textContent=text;return tag}));const githubBtn=document.getElementById('dialog-github');if(githubBtn)githubBtn.href=project.github;dialog.showModal();document.body.classList.add('modal-open')}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));dialog.addEventListener('click',e=>{const box=dialog.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)dialog.close()});
const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',currentLang==='en'?'Open menu':'Mở menu');menu.querySelector('span').textContent='+'}menu.addEventListener('click',()=>{const isOpen=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!isOpen));menu.setAttribute('aria-label',currentLang==='en'?(isOpen?'Open menu':'Close menu'):(isOpen?'Mở menu':'Đóng menu'));nav.classList.toggle('open',!isOpen);menu.querySelector('span').textContent=isOpen?'+':'−'});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});

// Active navigation highlight on scroll
const navLinks = document.querySelectorAll('.header nav a.nav-link');
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
  const scrollPos = window.scrollY + 150;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', highlightNavOnScroll);
window.addEventListener('load', highlightNavOnScroll);

document.getElementById('copy-email').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('chieupham1011@gmail.com');status.textContent=currentLang==='en'?'Email address copied.':'Đã sao chép địa chỉ email.'}catch{status.textContent=currentLang==='en'?'Email: chieupham1011@gmail.com — select the address above to copy it.':'Email: chieupham1011@gmail.com — bạn có thể chọn và sao chép địa chỉ phía trên.'}});document.getElementById('year').textContent=new Date().getFullYear();

const i18nHTML = {
  about_p1: {
    vi: 'Tôi là <strong>Phạm Văn Chiêu</strong>, tốt nghiệp ngành Kỹ thuật Phần mềm tại Đại học FPT. Kỳ thực tập tại FPT Academy và các dự án thực tế giúp tôi tích lũy nền tảng phát triển phần mềm toàn diện.',
    en: 'I’m <strong>Phạm Văn Chiêu</strong>, a Software Engineering graduate from FPT University. My internship at FPT Academy and practical projects gave me a comprehensive software engineering foundation.'
  },
  about_p2: {
    vi: 'Tôi có kinh nghiệm phát triển hệ thống backend với Java Spring Boot, C# ASP.NET Core, Python FastAPI kết hợp với giao diện Web hiện đại (React, Next.js). Bên cạnh đó, tôi rất đam mê và định hướng phát triển sâu hơn về tích hợp các giải pháp AI vào ứng dụng thực tế.',
    en: 'I specialize in building backends with Java Spring Boot, C# ASP.NET Core, Python FastAPI alongside modern web interfaces (React, Next.js). I am also deeply passionate about exploring and building AI-powered solutions to solve real-world problems.'
  }
};

const translations = {
 'Đến nội dung chính':'Skip to main content',
 'Trang chủ':'Home', 'Giới thiệu':'About', 'Kỹ năng':'Skills', 'Dự án':'Projects', 'Kinh nghiệm':'Experience', 'Kết nối':'Contact',
 'FULL-STACK DEVELOPER · HÀ NỘI, VIỆT NAM':'FULL-STACK DEVELOPER · HANOI, VIETNAM',
 'Lập trình Full-Stack.':'Full-Stack Development.',
 'Xây dựng sản phẩm web & giải pháp AI.':'Building web products & AI solutions.',
 'Tối ưu trải nghiệm người dùng với giao diện mượt mà, kết hợp hệ thống API & cơ sở dữ liệu vững chắc nhằm giải quyết hiệu quả các bài toán thực tế.':'Focusing on smooth UI/UX integrated with robust APIs & databases to solve real-world problems effectively.',
 'Khám phá dự án':'Explore my work', 'Tải CV':'Download CV',
 '01 — GIỚI THIỆU':'01 — INTRODUCTION', 'Tìm hiểu thêm':'Get to know me', 'Đôi nét về tôi':'A little about me',
 'MỘT CHÚT BỐI CẢNH':'A LITTLE CONTEXT',
 'Từ những dòng code':'From lines of code', 'đến giải pháp hữu ích.':'to meaningful solutions.',
 'DỰ ÁN CÁ NHÂN':'PROJECTS', '03 Dự án trong CV':'03 Projects in CV',
 'HỌC VẤN':'EDUCATION', 'Đại học FPT (2022–2026)':'FPT University (2022–2026)',
 'ĐỊNH HƯỚNG':'FOCUS', 'AI & Web Development':'AI & Web Development',
 'Công nghệ & kỹ năng':'Technologies & skills', 'BỘ CÔNG CỤ CỦA TÔI':'MY TOOLKIT', 
 'Cơ sở dữ liệu':'Databases', 'Công cụ':'Tools',
 'Kiến trúc & Tích hợp':'Architecture & Integration',
 'Dự án tiêu biểu':'Selected projects',
  '01 / DỰ ÁN CÁ NHÂN':'01 / PERSONAL PROJECT', 'FULL-STACK & AI':'FULL-STACK & AI', 'APPLIED AI':'APPLIED AI',
  'Trợ lý email ứng dụng AI':'AI-powered email assistant',
  'Ứng dụng LLM Function Calling để tự động phân loại và tóm tắt Gmail theo 4 mức ưu tiên. Kết hợp linh hoạt giữa AI và cơ chế dự phòng quy tắc (rule-based), hỗ trợ trích xuất nội dung quan trọng và khởi tạo bản nháp trả lời thông minh.':'Uses LLM Function Calling to automatically classify and summarize Gmail messages into 4 priority levels. Combines AI with a flexible rule-based fallback mechanism to extract key information and generate smart reply drafts.',
  'TỪ HỘP THƯ ĐẾN HÀNH ĐỘNG':'FROM INBOX TO ACTION',
  'Ít nhiều hơn.':'Less clutter.',
  'Đúng ưu tiên hơn.':'More focus.',
  '01 Phân loại email':'01 Email classification',
  '02 Tóm tắt nội dung':'02 Content summarization',
  '03 Soạn nháp':'03 Draft',
  'QUẢN LÝ ĐÀO TẠO THÔNG MINH':'SMART EDUCATION MANAGEMENT',
  'Lịch học tối ưu.':'Optimized schedule.',
  'Học liệu tập trung.':'Centralized learning.',
  '01 Quản lý khóa học & học liệu':'01 Courses & learning materials',
  '02 Tự động CP-SAT':'02 Automated CP-SAT',
  '03 Phân quyền 3 vai trò':'03 3-Role access control',
  'MUA SẮM TRỰC TUYẾN MƯỢT MÀ':'SEAMLESS ONLINE SHOPPING',
  'Thanh toán an toàn.':'Secure payment.',
  'Đặt hàng tức thì.':'Instant ordering.',
  '01 Giỏ hàng & quản lý đơn sắm':'01 Cart & order management',
  '02 Bảo mật Spring Security':'02 Spring Security protection',
  '03 Thanh toán VNPay':'03 VNPay integration',
  'Khám phá dự án':'Explore project',
  'Khám phá chi tiết':'View project details',
  '02 / ĐỒ ÁN TỐT NGHIỆP':'02 / GRADUATION PROJECT', 'FULL-STACK':'FULL-STACK',
  'Hệ thống quản lý đào tạo IELTS':'IELTS Learning & Management System',
  'Nền tảng quản lý học tập, khóa học, học liệu và bài thi. Xây dựng dịch vụ backend quản lý dữ liệu và đóng góp thuật toán xếp lịch học tối ưu.':'Web-based learning management system. Built backend services for course data and contributed optimization constraints for scheduling.',
  '03 / DỰ ÁN THỰC TẬP':'03 / INTERNSHIP PROJECT',
  'Nền tảng thương mại điện tử':'E-commerce platform',
  'Hệ thống thương mại điện tử với đầy đủ quy trình từ chọn sản phẩm, giỏ hàng, đặt hàng đến xác thực bảo mật và thanh toán trực tuyến VNPay.':'Full-stack e-commerce system featuring products, shopping cart, checkout, security authentication, and online VNPay payments.',
  'Hành trình':'My journey', 'KINH NGHIỆM':'EXPERIENCE', 'HỌC VẤN':'EDUCATION',
  'Software Engineer Intern':'Software Engineer Intern',
  'Thực hành phát triển phần mềm Full-Stack với Java, Spring Boot và Web standards. Xây dựng REST API, quản lý cơ sở dữ liệu với Spring Data JPA, bảo mật ứng dụng và phối hợp cùng đội nhóm để hoàn thiện các module nghiệp vụ.':'Practiced Full-Stack software engineering with Java, Spring Boot, and Web standards. Built REST APIs, managed databases with Spring Data JPA, secured applications, and collaborated to deliver business modules.',
  'Kỹ thuật Phần mềm':'Software Engineering', 'Đại học FPT':'FPT University',
  'Tích lũy nền tảng vững chắc về lập trình hướng đối tượng (OOP), kiến trúc ứng dụng, cơ sở dữ liệu quan hệ và quy trình phát triển phần mềm nhóm.':'Built a strong foundation in object-oriented programming, application architecture, relational databases, and collaborative software development.',
  'Đồ án tốt nghiệp: IELTS Learning & Management System.':'Graduation project: IELTS Learning & Management System.',
  '05 / CÙNG KẾT NỐI':'05 / CONTACT', 'HÀ NỘI, VIỆT NAM':'HANOI, VIETNAM',
  'Một cuộc trò chuyện.':'One conversation.', 'Nhiều khả năng mới.':'New possibilities.',
  'Tôi mong muốn trao đổi về cơ hội phát triển phần mềm,':'I’d love to talk about software development opportunities,',
  'các dự án Full-Stack web và những ứng dụng thực tiễn.':'Full-Stack web projects, and practical applications.',
  'Sẵn sàng tiếp nhận cơ hội mới':'Available for new opportunities',
  'EMAIL LIÊN HỆ':'DIRECT EMAIL',
  'SỐ ĐIỆN THOẠI':'PHONE NUMBER',
  'KÊNH LIÊN KẾT':'CONNECT & RESUME',
  'Sao chép email':'Copy email', 'Về đầu trang ↑':'Back to top ↑', 'Phần việc & chức năng':'Contributions & features',
  'Công nghệ sử dụng':'Technology stack', 'Xem hồ sơ GitHub':'View GitHub profile'
};

const projectsEn={
 inbox:{category:'PERSONAL PROJECT · FULL-STACK & AI',title:'Inbox Triage Agent',summary:'An email assistant built with FastAPI and LLM function calling to classify, summarize, and help process Gmail messages.',details:['Classifies and summarizes email into four priority categories.','Implements a hybrid AI + rule-based fallback for LLM failures and rate-limit events.','Integrates Gmail API using Google OAuth 2.0.','Extracts context and automatically generates intelligent reply drafts.'],stack:projects.inbox.stack,github:projects.inbox.github},
 ielts:{category:'GRADUATION PROJECT · TEAM OF 5 · MAY–AUG 2026',title:'IELTS Learning & Management System',summary:'A Full-Stack web system for managing courses, classes, learning materials, exams, users, and academic activities.',details:['Developed course management backend services with ASP.NET Core and Entity Framework Core.','Built functions to manage and organize learning materials within courses.','Developed user and parent management services and related business logic.','Contributed scheduling constraints in team discussions for the Google OR-Tools CP-SAT module, including teachers, rooms, time slots, availability, and conflicts.'],stack:projects.ielts.stack,github:projects.ielts.github},
 food:{category:'INTERNSHIP PROJECT · FULL-STACK · MAY–AUG 2025',title:'FastFood E-commerce Platform',summary:'An e-commerce platform developed during an internship, with full checkout, authentication, and backend services.',details:['Built product, cart, order, and user features.','Used Spring Security for login, user roles, and OAuth2 authentication.','Managed application data with Spring Data JPA and MySQL.','Integrated VNPay for online payments.'],stack:projects.food.stack,github:projects.food.github}
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
 ['.dialog-close','aria-label','Đóng chi tiết dự án','Close project details']
];
function updateThemeLabel(){const dark=document.documentElement.dataset.theme==='dark';const button=document.getElementById('theme-toggle');const label=currentLang==='en'?(dark?'Switch to light mode':'Switch to dark mode'):(dark?'Chuyển sang giao diện sáng':'Chuyển sang giao diện tối');button.setAttribute('aria-label',label);button.setAttribute('title',label);button.setAttribute('aria-pressed',String(dark));document.querySelector('meta[name="theme-color"]').content=dark?'#10151e':'#ffffff'}
function setLanguage(lang){currentLang=lang;document.documentElement.lang=lang;textNodes.forEach(({node,source,key})=>{node.textContent=lang==='en'?source.replace(key,translations[key]):source});document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(i18nHTML[key]){el.innerHTML=i18nHTML[key][lang]}});document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));attributes.forEach(([selector,attr,vi,en])=>document.querySelectorAll(selector).forEach(el=>el.setAttribute(attr,lang==='en'?en:vi)));menu.setAttribute('aria-label',lang==='en'?(nav.classList.contains('open')?'Close menu':'Open menu'):(nav.classList.contains('open')?'Đóng menu':'Mở menu'));document.querySelector('.hero .primary').textContent=lang==='en'?'Explore my work':'Khám phá dự án';document.querySelector('meta[name="description"]').content=lang==='en'?'Portfolio of Phạm Văn Chiêu, a Full-Stack developer in Hanoi working with Java Spring Boot, C# ASP.NET Core, Python FastAPI, React/Next.js, and applied AI.':'Portfolio của Phạm Văn Chiêu, Lập trình viên Full-Stack với kinh nghiệm Java Spring Boot, C# ASP.NET Core, Python FastAPI, React/Next.js và ứng dụng AI.';document.getElementById('copy-status').textContent='';updateThemeLabel();savePreference('chieu-language',lang)}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
document.getElementById('theme-toggle').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;savePreference('chieu-theme',theme);updateThemeLabel()});
setLanguage(currentLang);
