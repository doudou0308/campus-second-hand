document.addEventListener('DOMContentLoaded', function() {

    // ==================== 1. 首页轮播圆点 ====================
    var heroImg = document.getElementById('heroImg');
    var dots = document.querySelectorAll('.hero-dot');

    if (heroImg && dots.length > 0) {
        var imgList = [
            'img/DSC00355.jpg',
            'img/DSC00371_1.jpg',
            'img/DSC00454.jpg'
        ];

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                var index = this.getAttribute('data-index');
                if (index !== null) {
                    heroImg.src = imgList[index];
                    dots.forEach(function(d) { d.classList.remove('active'); });
                    this.classList.add('active');
                }
            });
        });
    }

    // ==================== 2. 搜索框回车键支持 ====================
    var searchInput = document.querySelector('.search-bar input');
    var searchBtn = document.querySelector('.search-bar button');

    if (searchInput && searchBtn) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                doSearch();
            }
        });

        searchBtn.addEventListener('click', function() {
            doSearch();
        });
    }

    function doSearch() {
        var keyword = searchInput.value.trim();
        if (keyword) {
            alert('搜索功能开发中... 您搜索的关键词是：' + keyword);
        } else {
            alert('请输入搜索关键词！');
        }
    }

    // ==================== 3. 回到顶部按钮 ====================
    var backBtn = document.createElement('button');
    backBtn.className = 'back-to-top';
    backBtn.innerHTML = '&#9650;';
    document.body.appendChild(backBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backBtn.style.display = 'block';
        } else {
            backBtn.style.display = 'none';
        }
    });

    backBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==================== 4. 分类筛选 ====================
    var filterBtns = document.querySelectorAll('.filter-btn');
    var productCards = document.querySelectorAll('.product-card[data-category]');
    var noResult = document.getElementById('noResult');

    if (filterBtns.length > 0 && productCards.length > 0) {
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var filter = this.getAttribute('data-filter');

                filterBtns.forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');

                var visibleCount = 0;
                productCards.forEach(function(card) {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = '';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (noResult) {
                    noResult.style.display = visibleCount === 0 ? 'block' : 'none';
                }
            });
        });
    }

    // ==================== 5. 联系表单验证 ====================
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('请填写完整信息！所有字段都不能为空。');
                return;
            }

            if (!validateEmail(email)) {
                alert('请输入正确的电子邮箱格式！例如：example@mail.com');
                return;
            }

            alert('留言提交成功！感谢您的反馈，我们会尽快回复。');
            contactForm.reset();
        });
    }

    // ==================== 6. 发布表单验证 ====================
    var publishForm = document.getElementById('publishForm');
    if (publishForm) {
        publishForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var title = document.getElementById('title').value.trim();
            var price = document.getElementById('price').value.trim();
            var desc = document.getElementById('desc').value.trim();

            if (!title || !price) {
                alert('物品标题和价格不能为空！');
                return;
            }

            var priceNum = parseFloat(price);
            if (isNaN(priceNum) || priceNum <= 0) {
                alert('请输入有效的价格（大于0的数字）！');
                return;
            }

            if (!desc) {
                alert('请填写物品描述，方便买家了解详情！');
                return;
            }

            alert('发布成功！您的闲置物品已提交，审核通过后即可在平台显示。');
            window.location.href = 'index.html';
        });
    }

    // ==================== 7. 商品卡片点击 ====================
    var allProductCards = document.querySelectorAll('.product-card');
    allProductCards.forEach(function(card) {
        card.addEventListener('click', function() {
            var titleEl = this.querySelector('.product-title');
            var title = titleEl ? titleEl.innerText : '商品';
            alert('查看商品详情：' + title + '\n\n（详情页开发中，敬请期待）');
        });
    });

    // ==================== 工具函数 ====================
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
