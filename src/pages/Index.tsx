import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});

  const portfolioItems = [
    {
      id: 1,
      title: "Световая вывеска для ресторана",
      tags: ["Неон", "Уличная"],
      description: "Объёмные световые буквы с неоновой подсветкой для фасада ресторана премиум-класса",
      image: "https://cdn.poehali.dev/projects/749f9227-2797-437d-bc42-a5f4cb3682f8/files/1e0de70c-b163-45b3-b19f-491526c9f335.jpg"
    },
    {
      id: 2,
      title: "Комплексное оформление офиса",
      tags: ["Металл", "Интерьер"],
      description: "Корпоративная навигация и логотипы из нержавеющей стали для бизнес-центра",
      image: "https://cdn.poehali.dev/projects/749f9227-2797-437d-bc42-a5f4cb3682f8/files/30f61b90-888c-4797-9715-569e126457d1.jpg"
    },
    {
      id: 3,
      title: "Фасад торгового центра",
      tags: ["Комплекс", "LED"],
      description: "Полное оформление фасада ТЦ с LED-системами и брендированными вывесками",
      image: "https://cdn.poehali.dev/projects/749f9227-2797-437d-bc42-a5f4cb3682f8/files/791876c8-bf2c-4f80-9951-57392b9ce176.jpg"
    }
  ];

  const newsItems = [
    {
      id: 1,
      date: "15.12.2024",
      category: "Проекты",
      title: "Завершили оформление нового ресторана премиум-класса",
      image: "https://cdn.poehali.dev/projects/749f9227-2797-437d-bc42-a5f4cb3682f8/files/e289e08c-7186-453e-b582-4bd3209f97f5.jpg"
    },
    {
      id: 2,
      date: "10.12.2024",
      category: "Технологии",
      title: "Новые материалы для неоновых вывесок: гибкий LED-неон",
      image: "https://cdn.poehali.dev/projects/749f9227-2797-437d-bc42-a5f4cb3682f8/files/3c152089-c652-4b41-a538-b4cf0dbbdff9.jpg"
    },
    {
      id: 3,
      date: "05.12.2024",
      category: "Компания",
      title: "Расширили производство: +30% мощностей в 2024 году",
      image: "https://cdn.poehali.dev/projects/749f9227-2797-437d-bc42-a5f4cb3682f8/files/1e0de70c-b163-45b3-b19f-491526c9f335.jpg"
    }
  ];

  const quizQuestions = [
    {
      question: "Какой тип объекта вы оформляете?",
      options: ["Ресторан / Кафе", "Магазин / Бутик", "Офис / Бизнес-центр", "ТЦ / Торговая недвижимость"]
    },
    {
      question: "Где планируется размещение?",
      options: ["Фасад здания", "Внутри помещения", "Витрина", "Комплексное оформление"]
    },
    {
      question: "Какой бюджет проекта?",
      options: ["До 300 000 ₽", "300 000 - 800 000 ₽", "800 000 - 2 000 000 ₽", "Более 2 000 000 ₽"]
    }
  ];

  const services = [
    {
      icon: "Zap",
      title: "Наружная реклама",
      description: "Световые, неоновые, металлические, объёмные буквы, фасады, витрины"
    },
    {
      icon: "Home",
      title: "Внутреннее оформление",
      description: "Логотипы, навигация, таблички, нумерация, стенды"
    },
    {
      icon: "Package",
      title: "Комплексное оформление",
      description: "Дизайн → согласование → производство → монтаж → поддержка"
    }
  ];

  const advantages = [
    { icon: "Award", text: "25+ лет опыта" },
    { icon: "TrendingUp", text: "15 000+ проектов" },
    { icon: "Factory", text: "Собственное производство" },
    { icon: "ShieldCheck", text: "Гарантия до 60 месяцев" },
    { icon: "DollarSign", text: "Честные цены" },
    { icon: "Clock", text: "Расчёт за 24 часа" },
    { icon: "CheckCircle", text: "Полный цикл" },
    { icon: "Wrench", text: "Поддержка" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleQuizAnswer = (option: string) => {
    setQuizAnswers({ ...quizAnswers, [quizStep]: option });
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-xl font-heading font-bold tracking-tight">ВАВИЛОН</div>
          <nav className="hidden md:flex gap-12 text-sm">
            <a href="#services" className="hover:opacity-60 transition-opacity">УСЛУГИ</a>
            <a href="#portfolio" className="hover:opacity-60 transition-opacity">ПОРТФОЛИО</a>
            <a href="#news" className="hover:opacity-60 transition-opacity">НОВОСТИ</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">КОНТАКТЫ</a>
          </nav>
          <Button variant="default" size="sm" className="text-xs font-medium">ЗАКАЗАТЬ РАСЧЁТ</Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://cdn.poehali.dev/projects/749f9227-2797-437d-bc42-a5f4cb3682f8/files/1e0de70c-b163-45b3-b19f-491526c9f335.jpg"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-7xl text-white">
          <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-heading font-bold mb-12 leading-[0.85] animate-fade-in">
            ВЫВЕСКИ<br />И ОФОРМЛЕНИЕ
          </h1>
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed">
                СОБСТВЕННОЕ ПРОИЗВОДСТВО<br />БЕЗ ПОСРЕДНИКОВ
              </p>
              <div className="flex gap-8">
                <div className="flex gap-3">
                  <div className="text-6xl font-heading font-bold">25+</div>
                  <div className="text-sm opacity-80">ЛЕТ<br />ОПЫТА</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-6xl font-heading font-bold">15K+</div>
                  <div className="text-sm opacity-80">ПРОЕКТОВ</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-full justify-start text-base h-16 font-medium bg-white text-black hover:bg-white/90">
                ПРОЙТИ БЫСТРЫЙ КВИЗ
                <Icon name="ArrowRight" className="ml-auto" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="w-full justify-start text-base h-16 font-medium border-white text-white hover:bg-white/10">
                СМОТРЕТЬ ПОРТФОЛИО
                <Icon name="ArrowRight" className="ml-auto" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-8xl font-heading font-bold mb-24 uppercase">
            ПОДБЕРЁМ<br />РЕШЕНИЕ ЗА 3 ВОПРОСА
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="mb-8">
                <div className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                  Вопрос {quizStep + 1} из {quizQuestions.length}
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-foreground transition-all duration-500"
                    style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-heading font-bold mb-12 leading-tight">
                {quizQuestions[quizStep].question}
              </h3>
              
              <div className="space-y-4">
                {quizQuestions[quizStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(option)}
                    className="w-full text-left p-6 border-2 border-border hover:border-foreground transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{option}</span>
                      <Icon name="ArrowRight" className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={20} />
                    </div>
                  </button>
                ))}
              </div>

              {quizStep > 0 && (
                <Button 
                  variant="ghost" 
                  className="mt-8"
                  onClick={() => setQuizStep(quizStep - 1)}
                >
                  <Icon name="ArrowLeft" className="mr-2" size={16} />
                  НАЗАД
                </Button>
              )}
            </div>

            <div className="relative h-[600px]">
              <img 
                src="https://cdn.poehali.dev/projects/749f9227-2797-437d-bc42-a5f4cb3682f8/files/e289e08c-7186-453e-b582-4bd3209f97f5.jpg"
                alt="Производство вывесок"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-8">
                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Наше производство</p>
                <h4 className="text-2xl font-heading font-bold uppercase">Контроль качества на каждом этапе</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="border-0 shadow-none group cursor-pointer">
              <CardContent className="p-0">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">01</div>
                <h3 className="text-xl font-heading font-semibold mb-4 uppercase">Собственник бизнеса</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Подберём вывеску под ваш формат и бюджет</p>
                <Button variant="link" className="p-0 group-hover:translate-x-2 transition-transform">
                  ВЫБРАТЬ РЕШЕНИЕ <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none group cursor-pointer">
              <CardContent className="p-0">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">02</div>
                <h3 className="text-xl font-heading font-semibold mb-4 uppercase">Дизайнер</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Материалы, технологии, примеры реализации</p>
                <Button variant="link" className="p-0 group-hover:translate-x-2 transition-transform">
                  СМОТРЕТЬ МАТЕРИАЛЫ <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none group cursor-pointer">
              <CardContent className="p-0">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">03</div>
                <h3 className="text-xl font-heading font-semibold mb-4 uppercase">Застройщик / Архитектор</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Комплексное оформление объектов под ключ</p>
                <Button variant="link" className="p-0 group-hover:translate-x-2 transition-transform">
                  СМОТРЕТЬ ПРОЕКТЫ <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-8xl font-heading font-bold mb-24 uppercase">
            НАШИ УСЛУГИ
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            {services.map((service, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="mb-8 transition-transform group-hover:scale-110">
                  <Icon name={service.icon} size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-6 uppercase">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                <Button variant="link" className="p-0 text-sm group-hover:translate-x-2 transition-transform">
                  СМОТРЕТЬ УСЛУГИ <Icon name="ArrowRight" className="ml-2" size={14} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-24">
            <h2 className="text-5xl md:text-8xl font-heading font-bold mb-6 uppercase">ПОРТФОЛИО</h2>
            <p className="text-2xl text-muted-foreground">15 000+ реализованных проектов</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[16/10]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="rounded-none">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 uppercase leading-tight">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                <div className="flex gap-4">
                  <Button size="sm" className="text-xs">СМОТРЕТЬ КЕЙС</Button>
                  <Button size="sm" variant="outline" className="text-xs">РАССЧИТАТЬ</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button size="lg" variant="outline" className="font-medium">
              ВСЕ ПРОЕКТЫ <Icon name="Grid" className="ml-3" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-8xl font-heading font-bold mb-24 uppercase text-center">
            ПОЧЕМУ ВАВИЛОН
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {advantages.map((adv, idx) => (
              <div key={idx} className="text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  <Icon name={adv.icon} size={40} strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium uppercase tracking-wide">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-8xl font-heading font-bold mb-12 uppercase">КАК МЫ РАБОТАЕМ</h2>
          <p className="text-2xl text-muted-foreground mb-24">Полный цикл — от идеи до установки</p>
          
          <div className="space-y-16">
            {[
              { num: "01", icon: "MessageSquare", title: "Консультация и расчёт", desc: "Обсудим задачу, подберём решение, рассчитаем стоимость за 24 часа" },
              { num: "02", icon: "Pencil", title: "Дизайн и согласование", desc: "Создадим макеты, поможем с согласованием в архитектуре" },
              { num: "03", icon: "Cog", title: "Производство", desc: "Изготовим на собственном производстве с контролем качества" },
              { num: "04", icon: "Hammer", title: "Монтаж и поддержка", desc: "Установим, настроим, обеспечим гарантийное обслуживание" }
            ].map((step, idx) => (
              <div key={idx} className="grid md:grid-cols-12 gap-8 items-start pb-16 border-b border-border last:border-0">
                <div className="md:col-span-2 text-6xl font-heading font-bold text-muted-foreground/30">{step.num}</div>
                <div className="md:col-span-2 flex items-start pt-2">
                  <Icon name={step.icon} size={40} strokeWidth={1.5} />
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-heading font-semibold mb-4 uppercase">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-24">
            <h2 className="text-5xl md:text-8xl font-heading font-bold mb-6 uppercase">НОВОСТИ</h2>
            <p className="text-2xl text-muted-foreground">Последние проекты и достижения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <article key={news.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground uppercase tracking-wider">
                  <span>{news.date}</span>
                  <span>•</span>
                  <Badge variant="outline" className="rounded-none">{news.category}</Badge>
                </div>
                <h3 className="text-xl font-heading font-semibold uppercase leading-tight group-hover:opacity-60 transition-opacity">
                  {news.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="font-medium">
              ВСЕ НОВОСТИ <Icon name="ArrowRight" className="ml-3" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-heading font-bold mb-6 uppercase leading-tight">
              ПОЛУЧИТЕ РАСЧЁТ<br />ЗА 24 ЧАСА
            </h2>
            <p className="text-muted-foreground">Без спама, ответ в течение 2 часов</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              placeholder="ВАШЕ ИМЯ" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="h-14 text-sm uppercase"
            />
            <Input 
              placeholder="ТЕЛЕФОН" 
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="h-14 text-sm uppercase"
            />
            <Textarea 
              placeholder="РАССКАЖИТЕ О ВАШЕМ ПРОЕКТЕ (НЕОБЯЗАТЕЛЬНО)" 
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
              className="min-h-32 text-sm uppercase resize-none"
            />
            <Button type="submit" size="lg" className="w-full h-14 text-sm font-medium uppercase">
              ПОЛУЧИТЬ РАСЧЁТ
              <Icon name="ArrowRight" className="ml-auto" size={20} />
            </Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-heading font-bold mb-6 uppercase">Вавилон</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Рекламно-производственная компания. 25+ лет создаём вывески, которые работают.</p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-6 text-sm uppercase tracking-wide">Услуги</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Наружная реклама</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Внутреннее оформление</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Комплексное решение</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Согласование вывесок</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-6 text-sm uppercase tracking-wide">Компания</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-6 text-sm uppercase tracking-wide">Контакты</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@vavilon.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">© 2024 Вавилон. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
