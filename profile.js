window.addEventListener('DOMContentLoaded', () => {
  // --- 1. Hiệu ứng active cho phần .home khi scroll ---
  const home = document.querySelector('.home');

  function checkHomeActive() {
    const triggerPoint = window.innerHeight / 2;
    const homeTop = home.getBoundingClientRect().top;

    if (homeTop < triggerPoint) {
      home.classList.add('active');
    } else {
      home.classList.remove('active');
    }
  }

  // --- 2. Hiệu ứng xoay và ánh sáng di chuyển cho ảnh trong .img-box ---
  const imgBox = document.querySelector(".img-box");
  if (imgBox) {
    const imgItem = imgBox.querySelector(".img-item");
    const light = imgItem.querySelector(".light");

    imgBox.addEventListener("mousemove", (e) => {
      const rect = imgBox.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      const rotateX = (-offsetY / 15).toFixed(2);
      const rotateY = (offsetX / 15).toFixed(2);
      imgItem.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

      const xPercent = ((offsetX / rect.width) * 100 + 50).toFixed(2);
      const yPercent = ((offsetY / rect.height) * 100 + 50).toFixed(2);
      light.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255,255,255,0.25), transparent 60%)`;
    });

    imgBox.addEventListener("mouseleave", () => {
      imgItem.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      light.style.background = `radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 60%)`;
    });
  }

  // --- 3. Ẩn intro animation khi kết thúc ---
  const intro = document.getElementById('intro');
  if (intro) {
    intro.addEventListener('animationend', () => {
      intro.classList.add('fade-out');
      setTimeout(() => {
        intro.style.display = 'none';
        document.body.style.overflow = 'auto'; // cho phép cuộn lại
      }, 1000);
    });
  }

  // --- 4. Xử lý scroll: navbar mở rộng + .home active ---
  window.addEventListener('scroll', () => {
    // Navbar expand
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("expand");
      } else {
        navbar.classList.remove("expand");
      }
    }

    // .home active
    if (home) checkHomeActive();
  });

  // Khởi động lần đầu
  if (home) checkHomeActive();
});

function toggleDarkMode() {
  alert("Dev By Lughx");
}
function showAlert() {
  document.getElementById('custom-alert').style.display = 'flex';
}

function closeAlert() {
  document.getElementById('custom-alert').style.display = 'none';
}

const messages = [
    "Dev By Lughx",
    "Follow Tiktok Điii",
    "Follow Facebook Điii",
    "Nghe nhạc của Lughx điii",
    "Follow Youtube Điii",
    "Xin chào!"
  ];

  const colors = ['#FF4E50', '#1FA2FF', '#12D8FA', '#A6FFCB', '#FFD541', '#FF6F91', '#845EC2', '#00C9A7'];

  const popSound = document.getElementById('popSound');

  function showToast() {
    const message = messages[Math.floor(Math.random() * messages.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toast.style.backgroundColor = color;

    // Vị trí ngẫu nhiên trên màn hình (tránh quá sát cạnh)
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 80);
    toast.style.left = `${x}px`;
    toast.style.top = `${y}px`;

    document.body.appendChild(toast);

    const popSound = document.getElementById('pop-sound');
    popSound.volume = 1;
    popSound.currentTime = 0;
    popSound.play();


    // Xóa thông báo sau 3 giây (trùng với thời gian animation)
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  document.getElementById('notifyBtn').addEventListener('click', showToast);

  