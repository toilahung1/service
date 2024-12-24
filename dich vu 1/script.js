//xử lý ngôn ngữ cho nút đổi ngôn ngữ ở thanh navigation đầu trang
function changeLanguage(language) {
    // Chọn các phần tử sẽ thay đổi nội dung
    const homeLink = document.querySelector('.home-link');
    const aboutLink = document.querySelector('.about-link');
    const solutionLink = document.querySelector('.solution-link');
    const blogLink = document.querySelector('.blog-link');
    const partnerLink = document.querySelector('.partner-link');
    const ctaButton = document.querySelector('.cta-button');

    // Thay đổi nội dung theo ngôn ngữ
    if (language === 'en') {
        homeLink.textContent = 'Home';
        aboutLink.textContent = 'About Us';
        solutionLink.textContent = 'Solutions';
        blogLink.textContent = 'Blog';
        partnerLink.textContent = 'Partners';
        ctaButton.textContent = 'Contact';
    } else if (language === 'vi') {
        homeLink.textContent = 'Trang chủ';
        aboutLink.textContent = 'Về chúng tôi';
        solutionLink.textContent = 'Giải pháp';
        blogLink.textContent = 'Blog';
        partnerLink.textContent = 'Đối tác';
        ctaButton.textContent = 'Liên hệ';
    }
}
