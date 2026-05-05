import Icon from "@/components/ui/icon";

type IName = Parameters<typeof Icon>[0]["name"];

export default function Index() {
  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Icon name="MapPin" size={12} />
            Россия · Казахстан · Беларусь
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Icon name="Clock" size={12} />
            Ответ ежедневно 9:00–21:00
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a href="tel:+79000000000" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Icon name="Phone" size={12} />
            +7 (900) 000-00-00
          </a>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Icon name="MessageCircle" size={12} />
            WhatsApp / Telegram
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header className="mur-header">
        <div className="mur-logo">МУР.АРТ</div>
        <nav className="mur-nav">
          <a href="#">О бренде</a>
          <a href="#">Коллекции</a>
          <a href="#">На заказ</a>
          <a href="#">Материалы</a>
          <a href="#">Отзывы</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-primary" style={{ fontSize: "11px", padding: "10px 22px" }}>
          Написать в Telegram
        </button>
      </header>

      <main>
        {/* БЛОК 1 — HERO */}
        <section className="mur-hero">
          <div className="hero-left">
            <div className="hero-eyebrow">Премиальная мебель для кошек</div>
            <h1 className="hero-h1">
              МУР.АРТ —<br />
              искусство баланса<br />
              между <em>дизайном</em><br />
              и инстинктом
            </h1>
            <p className="hero-sub">
              Премиальные комплексы, когтеточки и мебель для кошек — для тех, кто ценит эстетику дома и комфорт питомца.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Смотреть коллекции</button>
              <button className="btn-outline">Написать в Telegram</button>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">1000+</div>
                <div className="hero-stat-label">реализованных заказов</div>
              </div>
              <div>
                <div className="hero-stat-num">с 2020</div>
                <div className="hero-stat-label">года на рынке</div>
              </div>
              <div>
                <div className="hero-stat-num">3</div>
                <div className="hero-stat-label">страны доставки</div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img
              src="https://cdn.poehali.dev/projects/ff084d45-c138-43b6-9beb-091981386636/files/070187df-3bf1-4651-a0ad-353df160a94b.jpg"
              alt="Премиальный кошачий комплекс МУР.АРТ в интерьере"
            />
            <div className="hero-badge">
              <div style={{ fontSize: "11px", color: "var(--primary)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>
                Ручное производство
              </div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--dark)" }}>
                Нижний Новгород
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="mur-marquee">
          <div className="mur-marquee-content">
            &nbsp;· Премиальные материалы · Ручное производство · Доставка по РФ и СНГ · Безопасная конструкция · Красиво в интерьере · Для крупных пород · Выбор питомников · Премиальные материалы · Ручное производство · Доставка по РФ и СНГ · Безопасная конструкция · Красиво в интерьере · Для крупных пород · Выбор питомников&nbsp;
          </div>
        </div>

        {/* БЛОК 2 — ДОВЕРИЕ */}
        <div className="trust-bar">
          {[
            { num: "2020", label: "год основания бренда" },
            { num: "1000+", label: "реализованных заказов" },
            { num: "3", label: "страны доставки" },
            { num: "100%", label: "ручное производство" },
            { num: "5 лет", label: "доверия владельцев питомников" },
          ].map((item) => (
            <div className="trust-item" key={item.num}>
              <div className="trust-num">{item.num}</div>
              <div className="trust-label">{item.label}</div>
            </div>
          ))}
        </div>

        {/* БЛОК 3 — О БРЕНДЕ */}
        <section className="mur-section">
          <div className="about-grid">
            <div className="about-img">
              <img
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=700&q=80"
                alt="Кошка на комплексе МУР.АРТ"
              />
              <div className="about-img-label">«Легендарное качество»</div>
            </div>
            <div>
              <div className="section-eyebrow">О бренде</div>
              <h2 className="section-h2">Легендарное качество<br />в <em>новом имени</em></h2>
              <p className="section-text" style={{ marginBottom: "20px" }}>
                МУР.АРТ — это продолжение истории бренда HappyPet, которому доверяют владельцы кошек с 2020 года.
                Переход на новое имя связан с обновлением бренда и требованиями законодательства РФ.
              </p>
              <p className="section-text" style={{ marginBottom: "32px" }}>
                Мы сохранили главное: команду, опыт, технологии производства и тот самый подход к качеству, благодаря которому нас рекомендуют друзьям, семьям и питомникам.
              </p>
              <button className="btn-outline">Читать о бренде</button>
            </div>
          </div>
        </section>

        {/* БЛОК 4 — ПРЕИМУЩЕСТВА */}
        <section className="mur-section" style={{ paddingTop: "0" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-eyebrow">Наши принципы</div>
            <h2 className="section-h2">Почему выбирают МУР.АРТ</h2>
          </div>
          <div className="adv-grid">
            {[
              { icon: "Shield" as IName, title: "Безопасная конструкция", text: "Скрытые крепления и надёжная архитектура — никаких острых углов и ненадёжных соединений." },
              { icon: "Volume2" as IName, title: "Тихий дом", text: "Минимум шума даже при активных прыжках крупных пород." },
              { icon: "Star" as IName, title: "Премиальные материалы", text: "Влагостойкий МДФ, прочный канат, плотный текстиль «антикоготь» — рассчитаны на годы." },
              { icon: "Sparkles" as IName, title: "Лёгкий уход", text: "Съёмные лежанки и удобная чистка — ваш дом всегда в порядке." },
              { icon: "PawPrint" as IName, title: "Для крупных пород", text: "Мейн-куны, британцы, норвежские и активные кошки — конструкции выдерживают до 20 кг." },
              { icon: "Home" as IName, title: "Красиво в интерьере", text: "Выглядит как мебель, а не зоотовар. Вписывается в любой современный интерьер." },
            ].map((item) => (
              <div className="adv-card" key={item.title}>
                <div className="adv-icon">
                  <Icon name={item.icon} size={18} />
                </div>
                <div className="adv-title">{item.title}</div>
                <div className="adv-text">{item.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* БЛОК 5 — КОЛЛЕКЦИИ */}
        <section className="mur-section collections-bg">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div className="section-eyebrow">Ассортимент</div>
              <h2 className="section-h2" style={{ marginBottom: 0 }}>Коллекции МУР.АРТ</h2>
            </div>
            <button className="btn-outline">Перейти в каталог</button>
          </div>
          <div className="collections-grid">
            {[
              { icon: "🐱", name: "Для котят" },
              { icon: "🏰", name: "Высокие башни" },
              { icon: "🧱", name: "Стеновые системы" },
              { icon: "✂️", name: "Когтеточки" },
              { icon: "🛏️", name: "Лежанки" },
              { icon: "🏆", name: "Для питомников" },
              { icon: "🚀", name: "Мобильные" },
              { icon: "🎨", name: "На заказ" },
            ].map((item) => (
              <div className="coll-card" key={item.name}>
                <div className="coll-icon">{item.icon}</div>
                <div className="coll-name">{item.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* БЛОК 6 — КОМПЛЕКС НА ЗАКАЗ */}
        <section className="custom-section">
          <div className="custom-grid">
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "16px" }}>
                Индивидуальный проект
              </div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.2, color: "white", marginBottom: "24px" }}>
                Создадим комплекс<br />
                под ваш <em style={{ fontStyle: "italic", color: "var(--accent)" }}>интерьер</em>
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#999", marginBottom: "32px", maxWidth: "500px" }}>
                Разработаем индивидуальный проект с учётом размеров помещения, цвета интерьера, количества кошек и любимых зон отдыха питомца.
              </p>
              <div className="custom-tags">
                {["Квартиры", "Частные дома", "Несколько кошек", "Питомники", "Нестандартные помещения"].map((tag) => (
                  <span className="custom-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
              <button className="btn-outline-light" style={{ textAlign: "center" }}>Обсудить проект</button>
              <p style={{ fontSize: "12px", color: "#666", textAlign: "center" }}>
                Макс · WhatsApp / Telegram<br />
                Ответ ежедневно 9:00–21:00
              </p>
            </div>
          </div>
        </section>

        {/* БЛОК 7 — МАТЕРИАЛЫ */}
        <section className="mur-section">
          <div style={{ maxWidth: "600px" }}>
            <div className="section-eyebrow">Из чего мы делаем</div>
            <h2 className="section-h2">Материалы <em>премиального</em> уровня</h2>
            <p className="section-text">
              Красивые и практичные материалы, рассчитанные на долгий срок службы. МДФ, дерево, мягкий мебельный текстиль, надёжный канат и качественная фурнитура.
            </p>
          </div>
          <div className="materials-grid">
            {[
              { color: "#F5F0E8", name: "МДФ Premium", desc: "Влагостойкий, без токсинов" },
              { color: "#D4C9B8", name: "Канат сизаль", desc: "Прочный натуральный" },
              { color: "#8B7355", name: "Текстиль бежевый", desc: "Антикоготь, плотный" },
              { color: "#4A4A4A", name: "Текстиль графит", desc: "Антикоготь, плотный" },
              { color: "#C4B49A", name: "Дерево натурал", desc: "Экологичное, лёгкое" },
            ].map((mat) => (
              <div className="mat-card" key={mat.name}>
                <div className="mat-swatch" style={{ background: mat.color }} />
                <div className="mat-info">
                  <div className="mat-name">{mat.name}</div>
                  <div className="mat-desc">{mat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* БЛОК 8 — ОТЗЫВЫ */}
        <section className="mur-section reviews-bg">
          <div style={{ textAlign: "center", marginBottom: "0" }}>
            <div className="section-eyebrow">Клиенты о нас</div>
            <h2 className="section-h2">Отзывы из России,<br /><em>Казахстана и Беларуси</em></h2>
          </div>
          <div className="reviews-grid">
            {[
              { text: "Заказала башню для двух мейн-кунов. Качество выше всяких похвал — стоит надёжно, выглядит как дорогая мебель. Кошки от неё не отходят!", author: "Питомник «Северное Сияние»", city: "Москва" },
              { text: "Долго выбирала когтеточку, которая не испортит интерьер. МУР.АРТ — это именно то, что я искала. Стильно, прочно, кот доволен!", author: "Анна К.", city: "Санкт-Петербург" },
              { text: "Брали стеновую систему для трёх британцев. Монтаж простой, шума никакого. Рекомендуем всем владельцам крупных пород!", author: "Питомник «Royal Cats»", city: "Алматы" },
              { text: "Заказали комплекс под цвет нашей мебели — получилось идеально. Команда всё согласовала, помогла с выбором материала.", author: "Семья Петровых", city: "Минск" },
              { text: "Уже второй заказ! Первый комплекс купили в 2021, стоит как новый. Качество действительно на годы.", author: "Мурзик и его хозяйка", city: "Нижний Новгород" },
              { text: "Доставка быстрая, упаковка — огонь. Всё дошло целым, инструкция понятная. Собрала одна за час!", author: "Елена Р.", city: "Екатеринбург" },
            ].map((r) => (
              <div className="review-card" key={r.author}>
                <div className="review-stars">★★★★★</div>
                <p className="review-text">«{r.text}»</p>
                <div className="review-author">{r.author}</div>
                <div className="review-city">{r.city}</div>
              </div>
            ))}
          </div>
        </section>

        {/* БЛОК 9 — ДОСТАВКА */}
        <section className="mur-section">
          <div style={{ maxWidth: "560px", marginBottom: "48px" }}>
            <div className="section-eyebrow">Логистика</div>
            <h2 className="section-h2">Бережная доставка<br /><em>до двери</em></h2>
            <p className="section-text">
              Надёжная упаковка в коробки из пятислойного картона, защита деталей, понятная сборка и доставка по России, Казахстану и Беларуси.
            </p>
          </div>
          <div className="delivery-grid">
            <div className="delivery-steps">
              {[
                { num: "01", title: "Оформление заказа", text: "Выбираете модель или описываете пожелания — мы согласовываем детали в мессенджере." },
                { num: "02", title: "Производство", text: "Ручная сборка на нашем производстве в Нижнем Новгороде. Срок — от 7 рабочих дней." },
                { num: "03", title: "Упаковка", text: "Пятислойный картон, защита каждого элемента, маркировка для лёгкой сборки." },
                { num: "04", title: "Доставка", text: "Транспортными компаниями по РФ, Казахстану и Беларуси. Отслеживание онлайн." },
              ].map((step) => (
                <div className="delivery-step" key={step.num}>
                  <div className="step-num">{step.num}</div>
                  <div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-text">{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "var(--bg-warm)", padding: "48px 40px", border: "var(--border-light)" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "48px", fontWeight: 300, color: "var(--accent)", marginBottom: "16px" }}>РФ · КЗ · РБ</div>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "24px" }}>
                Работаем с ведущими транспортными компаниями. Страховка груза включена.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Россия — СДЭК, Деловые линии", "Казахстан — международные ТК", "Беларусь — международные ТК"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--dark)" }}>
                    <Icon name="Check" size={14} color="var(--primary)" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 10 — КОНСУЛЬТАЦИЯ */}
        <section className="consult-section">
          <div className="section-eyebrow" style={{ textAlign: "center" }}>Поможем выбрать</div>
          <h2 className="section-h2" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 20px" }}>
            Поможем выбрать <em>идеальный</em> вариант
          </h2>
          <p className="section-text" style={{ textAlign: "center", margin: "0 auto" }}>
            Расскажите о питомце, площади дома и пожеланиях — предложим лучшее решение.
          </p>
          <div className="consult-btns">
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="MessageCircle" size={14} />
              WhatsApp
            </button>
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="Send" size={14} />
              Telegram
            </button>
            <button className="btn-outline" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="Phone" size={14} />
              Позвонить
            </button>
          </div>
        </section>

        {/* БЛОК 11 — КОНТАКТЫ */}
        <section className="mur-section">
          <div className="section-eyebrow">Связаться с нами</div>
          <h2 className="section-h2">Контакты</h2>
          <div className="contacts-grid">
            {[
              { icon: "Phone" as IName, label: "Телефон", value: "+7 (900) 000-00-00" },
              { icon: "MessageCircle" as IName, label: "WhatsApp", value: "Написать сообщение" },
              { icon: "Send" as IName, label: "Telegram", value: "@murart_official" },
              { icon: "Mail" as IName, label: "Email", value: "info@mur.art" },
              { icon: "MapPin" as IName, label: "Производство", value: "Нижний Новгород" },
              { icon: "Truck" as IName, label: "Доставка", value: "РФ · Казахстан · Беларусь" },
            ].map((c) => (
              <div className="contact-item" key={c.label}>
                <div className="contact-icon">
                  <Icon name={c.icon} size={16} />
                </div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-value">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* БЛОК 12 — ФИНАЛЬНЫЙ CTA */}
        <section className="final-cta">
          <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--accent)", marginBottom: "24px" }}>
            Следующий шаг
          </div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400, color: "white", lineHeight: 1.2, marginBottom: "40px", maxWidth: "700px", margin: "0 auto 40px" }}>
            Выберите готовую модель<br />
            или <em style={{ fontStyle: "italic", color: "var(--accent)" }}>создадим вашу</em>
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-outline-light">Смотреть каталог</button>
            <button className="btn-primary" style={{ background: "var(--accent)", color: "var(--dark)" }}>Комплекс на заказ</button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mur-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">МУР.АРТ</div>
            <p className="footer-desc">
              МУР.АРТ — новое имя бренда HappyPet. Новый этап развития с сохранением качества, которому доверяют с 2020 года.
              Ручное производство в Нижнем Новгороде. Доставка по России, Казахстану и Беларуси.
            </p>
          </div>
          <div>
            <div className="footer-h4">Навигация</div>
            <ul className="footer-links">
              <li><a href="#">Каталог</a></li>
              <li><a href="#">На заказ</a></li>
              <li><a href="#">Материалы</a></li>
              <li><a href="#">Отзывы</a></li>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-h4">Контакты</div>
            <ul className="footer-links">
              <li><a href="tel:+79000000000">+7 (900) 000-00-00</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">ВКонтакте</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 МУР.АРТ. Все права защищены.</span>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </footer>
    </>
  );
}