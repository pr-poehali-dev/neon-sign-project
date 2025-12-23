import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });

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
    { icon: "DollarSign", text: "Честные цены без посредников" },
    { icon: "Clock", text: "Расчёт за 24 часа" },
    { icon: "CheckCircle", text: "Полный цикл работ" },
    { icon: "Wrench", text: "Поддержка и ремонт" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold text-primary">Вавилон</div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="default" size="sm">Заказать расчёт</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Вывески и оформление,<br />которые <span className="text-primary">работают</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Световые и неоновые вывески, комплексное оформление бизнеса.
          </p>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            От идеи до установки. 25+ лет опыта, 15 000+ проектов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Пройти быстрый квиз
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Eye" className="mr-2" size={20} />
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:scale-105 transition-all duration-300 hover:border-primary cursor-pointer">
              <CardContent className="p-8">
                <Icon name="Briefcase" className="mb-4 text-primary" size={40} />
                <h3 className="text-xl font-heading font-semibold mb-3">Собственник бизнеса</h3>
                <p className="text-muted-foreground mb-4">Подберём вывеску под ваш формат и бюджет</p>
                <Button variant="ghost" className="group-hover:text-primary">
                  Выбрать решение <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:border-secondary cursor-pointer">
              <CardContent className="p-8">
                <Icon name="Palette" className="mb-4 text-secondary" size={40} />
                <h3 className="text-xl font-heading font-semibold mb-3">Дизайнер</h3>
                <p className="text-muted-foreground mb-4">Материалы, технологии, примеры реализации</p>
                <Button variant="ghost" className="group-hover:text-secondary">
                  Смотреть материалы <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:border-accent cursor-pointer">
              <CardContent className="p-8">
                <Icon name="Building2" className="mb-4 text-accent" size={40} />
                <h3 className="text-xl font-heading font-semibold mb-3">Застройщик / архитектор</h3>
                <p className="text-muted-foreground mb-4">Комплексное оформление объектов под ключ</p>
                <Button variant="ghost" className="group-hover:text-accent">
                  Смотреть проекты <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="link" className="p-0 text-primary">
                    Смотреть услуги <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
            <span className="text-secondary">Портфолио</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">15 000+ реализованных проектов</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3">
                    {item.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex gap-3">
                    <Button size="sm" variant="default">Смотреть кейс</Button>
                    <Button size="sm" variant="outline">Рассчитать похожий</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Показать все проекты <Icon name="Grid" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Почему <span className="text-accent">Вавилон</span>?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Icon name={adv.icon} className="text-accent" size={36} />
                </div>
                <p className="font-medium">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
            Как мы <span className="text-primary">работаем</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Полный цикл — от идеи до установки</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "MessageSquare", title: "Консультация и расчёт", desc: "Обсудим задачу, подберём решение, рассчитаем стоимость за 24 часа" },
              { icon: "Pencil", title: "Дизайн и согласование", desc: "Создадим макеты, поможем с согласованием в архитектуре" },
              { icon: "Cog", title: "Производство", desc: "Изготовим на собственном производстве с контролем качества" },
              { icon: "Hammer", title: "Монтаж и поддержка", desc: "Установим, настроим, обеспечим гарантийное обслуживание" }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Icon name={step.icon} className="text-primary" size={32} />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border -z-10 last:hidden hidden md:block" />
                <h3 className="text-xl font-heading font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Получите расчёт стоимости <span className="text-primary">за 24 часа</span>
                </h2>
                <p className="text-muted-foreground">Без спама, ответ в течение 2 часов</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте (необязательно)" 
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Получить расчёт
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Вавилон</h3>
              <p className="text-sm text-muted-foreground">Рекламно-производственная компания. 25+ лет создаём вывески, которые работают.</p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Наружная реклама</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Внутреннее оформление</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Комплексное решение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Согласование вывесок</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@vavilon.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Вавилон. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
