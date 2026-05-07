// Robot Software Department - Interaction & Firebase Integration

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Loaded - Ready for Innovation");

    // Club Tab Switching Logic
    const tabs = document.querySelectorAll('.tab');
    const clubTitle = document.querySelector('.club-text h2');
    const clubDesc = document.querySelector('.club-text p');

    const clubData = {
        'MAS': 'MAS는 학교에서 배우는 것 뿐만 아니라 더 나아가 사회에 도움이 될 수 있는 로봇을 직접 만들어 각종 대회에 출전해 학생들끼리 서로 협업을 하며 자신의 전공지식과 역량을 같이 키워나가는 로봇자동차공학부 전공동아리입니다.',
        'MCA': 'MCA는 마이크로 컨트롤러와 임베디드 시스템을 연구하며, 다양한 센서 제어와 자율 주행 알고리즘을 학습하는 동아리입니다.',
        'MoAS': 'MoAS는 모바일 로봇공학 및 자율 시스템을 중점적으로 다루며, ROS(Robot Operating System) 기반의 로봇 개발을 목표로 합니다.',
        'SMART': 'SMART는 스마트 팩토리와 산업용 로봇 자동화 시스템을 연구하여 공정 효율화를 실현하는 기술을 연마합니다.',
        'UR': 'UR은 유니버설 로봇을 활용한 협동 로봇 제어와 인간-로봇 상호작용(HRI) 연구에 집중하는 동아리입니다.',
        '지능형로봇': '인공지능(AI)을 로봇에 접목하여 사물 인식, 음성 제어 등 지능형 서비스를 제공하는 로봇을 개발합니다.'
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            // Add to clicked
            tab.classList.add('active');
            
            // Update content
            const name = tab.textContent;
            clubTitle.textContent = name;
            clubDesc.textContent = clubData[name] || '동아리 정보가 준비 중입니다.';
            
            // Simple animation
            clubTitle.style.animation = 'fadeIn 0.5s ease';
            clubDesc.style.animation = 'fadeIn 0.5s ease';
        });
    });

    // --- Firebase Bulletin Board Logic (Placeholder for Guidebook) ---
    // Note: To use Firebase, you need to add the SDK and Config in index.html or here.
    // Refer to the 'Firebase Guidebook' artifact for details.

    const postForm = document.getElementById('postForm');
    const postInput = document.getElementById('postInput');
    const postList = document.getElementById('postList');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = postInput.value;
        if (text.trim() === "") return;

        // Local UI update (This will be replaced by Firebase's onSnapshot in the real implementation)
        addPostToUI(text, new Date().toLocaleDateString());
        
        postInput.value = "";
    });

    function addPostToUI(content, date) {
        const item = document.createElement('div');
        item.className = 'post-item';
        item.innerHTML = `
            <span>${content}</span>
            <small>${date}</small>
        `;
        postList.prepend(item);
    }

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === "#") return;
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
