import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');
  const [countersAnimated, setCountersAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'advantages', 'films', 'pricing', 'reviews', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      if (!countersAnimated) {
        const counters = document.querySelectorAll('.counter');
        counters.forEach((counter) => {
          const rect = counter.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setCountersAnimated(true);
            const target = parseInt(counter.getAttribute('data-target') || '0');
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target.toString();
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(current).toString();
              }
            }, 30);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [countersAnimated]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { id: 'services', label: 'Услуги', icon: 'Car' },
    { id: 'advantages', label: 'Преимущества', icon: 'Shield' },
    { id: 'films', label: 'Виды плёнок', icon: 'Layers' },
    { id: 'pricing', label: 'Стоимость', icon: 'DollarSign' },
    { id: 'reviews', label: 'Отзывы', icon: 'MessageCircle' },
    { id: 'contact', label: 'Бронирование', icon: 'Phone' },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 glass-effect shadow-2xl z-50">
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                <Icon name="Car" size={28} className="text-white" />
              </div>
              <span className="font-bold text-3xl gold-shine" style={{fontFamily: "'Playfair Display', serif"}}>PREMIUM TINT</span>
            </div>
            <ul className="hidden md:flex gap-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                      activeSection === item.id ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <Button onClick={() => scrollToSection('contact')} size="lg" className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 text-white font-semibold px-8">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 luxury-gradient"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://cdn.poehali.dev/projects/debde2b0-914c-4ef3-bf5c-52c0e58e094f/files/7976a0be-bfd9-42ef-8e00-a5bf6ea889f0.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">Премиум сервис</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Тонирование и бронирование автомобилей в Краснодаре
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Тонировка автомобиля – процесс который требует большого опыта и надлежащего инструмента. Наши специалисты работают в этой сфере уже более 6 лет и гарантируют высочайшее качество своей работы, а значит и Ваше полное удовлетворение ее результатами.
              </p>
              <Button onClick={() => scrollToSection('contact')} size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300 text-white font-bold">
                Записаться на консультацию
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/debde2b0-914c-4ef3-bf5c-52c0e58e094f/files/7976a0be-bfd9-42ef-8e00-a5bf6ea889f0.jpg"
                alt="Тонированный автомобиль"
                className="rounded-3xl premium-shadow w-full relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Элитный сервис</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-4">Наши услуги</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="group premium-shadow hover:scale-105 transition-all duration-500 border-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg">
                    <Icon name="Sun" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl">Тонирование стекол плёнками из США</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Пленки из США намного качественнее остальных пленок для тонировки вашего автомобиля. Они более устойчивы к выгоранию и истиранию, поэтому срок службы в 10 раз дольше обычных.
                </p>
                <p className="text-gray-700">
                  Для тонирования автомобилей в Краснодаре мы используем плёнки <strong>SunTek, LLumar и Sun control</strong>. Это флагманы рынка. Они позволяют достигать хороших показателей видимости из салона автомобиля. Обычно в 2-3 раза лучше, чем у китайских или европейских плёнок для тонирования.
                </p>
              </CardContent>
            </Card>

            <Card className="group premium-shadow hover:scale-105 transition-all duration-500 border-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-4 bg-gradient-to-br from-secondary to-gray-800 rounded-xl shadow-lg">
                    <Icon name="Shield" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl">Мы делаем съемную, атермальную и электронные тонировки уже 6 лет</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Мы затонируем вашу машину именно так как вам нужно, по ГОСТу, поможем подобрать оптимальный вариант тонировки. Мы тонируем авто в Краснодаре уже более 6 лет, делаем это максимально качественно и в короткие сроки. Мы умеем всё: производим тонировку плёнкой хамелеон, атермальную, съемную тонировку. Так же делаем электронную тонировку последнего поколения.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="group premium-shadow hover:scale-105 transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-4 bg-gradient-to-br from-accent to-yellow-600 rounded-xl shadow-lg">
                  <Icon name="Scale" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-3xl">Тонировка по ГОСТ и штрафы</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Законодательство предусматривает новые санкции с 2016 года. Это только про передние стекла, их нельзя тонировать пленкой больше 30% светопропускаемости, меньше 30% и атермальной можно.
              </p>
              <p className="text-gray-700">
                Уже с января ужесточается ответственность для автовладельцев за несанкционированную тонировку передних стекол машины. Новый закон в три раза увеличивает сумму штрафа за правонарушение: с 500 до 1500 рублей. Кроме того, при повторном совершении правонарушения, связанного с незаконной тонировкой, водителю грозит штраф — 5 000 рублей либо лишение права на управление автомобилем до 3-х месяцев.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 counter" data-target="6">0</div>
              <div className="text-xl font-semibold text-gray-700">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 counter" data-target="1200">0</div>
              <div className="text-xl font-semibold text-gray-700">Автомобилей</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 counter" data-target="98">0</div>
              <div className="text-xl font-semibold text-gray-700">% довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 counter" data-target="15">0</div>
              <div className="text-xl font-semibold text-gray-700">Лет гарантия</div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)"}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Почему выбирают нас</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-4 text-white">Преимущества тонирования стекол автомобилей</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group glass-effect hover:scale-105 transition-all duration-500 border-0">
              <CardHeader>
                <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-xl w-fit mb-4 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                  <Icon name="Eye" size={36} className="text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Защита от взглядов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Тонировка защищает внутреннее пространство салона от ненужных взглядов, защищает от солнечных лучей и как следствие предотвращает перегрев салона.
                </p>
              </CardContent>
            </Card>

            <Card className="group glass-effect hover:scale-105 transition-all duration-500 border-0">
              <CardHeader>
                <div className="p-4 bg-gradient-to-br from-secondary to-gray-800 rounded-xl w-fit mb-4 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                  <Icon name="ShieldCheck" size={36} className="text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Бронирующий эффект</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Еще одна не мало важная причина сделать тонировку на авто - это бронирующий эффект пленки. Стекла становятся прочнее, и при попадании дорожных камней не дадут стеклу, в случае его разрушения, высыпаться в салон и повредить пассажирам.
                </p>
              </CardContent>
            </Card>

            <Card className="group glass-effect hover:scale-105 transition-all duration-500 border-0">
              <CardHeader>
                <div className="p-4 bg-gradient-to-br from-accent to-yellow-600 rounded-xl w-fit mb-4 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                  <Icon name="Sparkles" size={36} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-3">Красивый внешний вид</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Тонировка стекол - самый распространенный и не дорогой способ тюнинга автомобиля. Пленка наносится на стекла с внутренней стороны и придает вашему железному коню более интересный, красивый и привлекательный вид.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="films" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Виды пленок для тонировки</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="XCircle" size={24} className="text-red-500" />
                  <CardTitle className="text-2xl">Крашенные (более дешевые)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Представляют собой прозрачную пленку с нанесенным на нее слоем крашенного клея. Как правило они не долговечные и через некоторое время становятся прозрачными, под действием ультрафиолетовых лучей - <strong>мы не используем их в работе</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                  <CardTitle className="text-2xl">Метализированые (Более дорогие и качественные)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Имеют срок службы до 15 лет. Мы используем производим тонировку по ГОСТУ и используем лучшие пленки брендов <strong>LLUMAR, SUN CONTROL, SUN TEK, AMERICAN STANDART, ARMOLAN</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-accent">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Sparkles" size={24} className="text-accent" />
                  <CardTitle className="text-2xl">Атермальные</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Защищающие салон авто и пассажиров от тепла и уф излучения, изготовленные высокотехнологичными методами по нано-технологиям.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">По светопропускаемости</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {['5%', '15%', '20%', '35%', '50%', '70%', '80%'].map((percent) => (
                    <div key={percent} className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">
                      {percent}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <p className="text-lg text-gray-800">
              При нанесении тонирующих пленок мы используем только профессиональные инструменты, которые дают гарантию качества работы и эксплуатации.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Прозрачные цены</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Стоимость тонировки автомобиля</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Цена зависит от класса автомобиля, сложности и размера стекол.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group premium-shadow hover:scale-105 transition-all duration-500 border-0 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="text-center pt-8">
                <div className="p-5 bg-gradient-to-br from-primary to-accent rounded-2xl w-fit mx-auto mb-6 shadow-xl">
                  <Icon name="Car" size={48} className="text-white" />
                </div>
                <CardTitle className="text-2xl mb-4">Российские автомобили</CardTitle>
                <CardDescription className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">от 2000 ₽</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">(цена указана за задний полукруг - заднее стекло, стекла задних дверей)</p>
              </CardContent>
            </Card>

            <Card className="group premium-shadow hover:scale-105 transition-all duration-500 border-0 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary to-gray-700"></div>
              <CardHeader className="text-center pt-8">
                <div className="p-5 bg-gradient-to-br from-secondary to-gray-800 rounded-2xl w-fit mx-auto mb-6 shadow-xl">
                  <Icon name="Car" size={48} className="text-white" />
                </div>
                <CardTitle className="text-2xl mb-4">Автомобили иностранного производства</CardTitle>
                <CardDescription className="text-5xl font-bold bg-gradient-to-r from-secondary to-gray-700 bg-clip-text text-transparent">от 3000 ₽</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">(цена указана за задний полукруг - заднее стекло, стекла задних дверей)</p>
              </CardContent>
            </Card>

            <Card className="group premium-shadow hover:scale-105 transition-all duration-500 border-0 overflow-hidden relative bg-gradient-to-br from-accent/5 to-primary/5">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent to-primary"></div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-secondary text-xs font-bold rounded-full uppercase">VIP</div>
              <CardHeader className="text-center pt-8">
                <div className="p-5 bg-gradient-to-br from-accent to-yellow-600 rounded-2xl w-fit mx-auto mb-6 shadow-2xl">
                  <Icon name="Crown" size={48} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-4">Премиум и бизнес класс</CardTitle>
                <CardDescription className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">от 3500 ₽</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">(цена указана за задний полукруг - заднее стекло, стекла задних дверей)</p>
              </CardContent>
            </Card>
          </div>

          <div className="premium-shadow bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 border border-gray-100">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Бронирование авто пленкой</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Бронирование стекол укрепляющими пленками сегодня очень востребовано. Они обладают толстой полимерной структурой и надёжным клеящим слоем. Кроме того, они могут быть нанесены на любые стекла автомобиля, в том числе те, которые имеют сильный изгиб, на лобовобое стекло. Толщина пленки для бронирования стекла может варьироваться от 112 до 300 мкр.
                </p>
                <p className="text-gray-700">
                  Пленкой можно покрывать не только стекла, она так же используется для бронирования всех поверхностей авто: капота, фар. Защита, установленная профессионалами, позволит предотвратить потускнение краски, ее выгорание, появление на лакокрасочном слое царапин и сколов. Кроме того, она придаст авто дополнительный блеск.
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/debde2b0-914c-4ef3-bf5c-52c0e58e094f/files/5f49fb2d-ed35-400e-a71e-85b5e4c015e5.jpg"
                  alt="Бронирование авто"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Отзывы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: 'Тонировка в наше время практически необходима. В моей многолетней практике вождения затонированного авто я нашел только два минуса - недостаточная видимость при движении задним ходом в темное время суток (но к этому привык и сейчас не испытываю абсолютно никакого неудобства) и лишний повод для штрафа гаишникам. Зато сколько плюсов. Нет лишних глаз, можешь чувствовать себя в салоне как дома, не боясь что кто то увидит как ты смачно зеваеш, например. К тому же, как бы дизайнер не работал, в итоге тонированая машина смотрится гораздо лучше. Всем советую.',
              },
              {
                text: 'Кроме того, скрывает оставленные вещи от воришек - посчитай, какой ущерб может быть только от одной кражи (вещи плюс разбитое окно или сломанный замок).',
              },
              {
                text: 'Кроме того, неоднократно бывали случаи нападения на водителей (трасса, криминальный район города и т.п.), кроме того, хамское поведение ТАЗиков с тремя-четырьмя пацанятами в салоне. Во всех этих случаях автомобиль затонированный даёт преимущество: невидно, сколько человек в салоне, поэтому более осторожное отношение к тебе, особенно если автомобиль дорогой.',
              },
              {
                text: 'Я затонировал машину только сзади, ребенку два года, ему в машине и так не комфортно а без тонировки так вообще беда. Стало гораздо удобнее.',
              },
              {
                text: 'У меня глаза очень чувствительны к яркому свету. зимой например когда яркое солнце и мокрая дорога — очень сложно ехать, приходится надевать темные очки не удобно. С тонированным лобовым стеклом стало комфортнее в солнечные дни. В разы комфортнее.',
              },
              {
                text: 'Почти уже два года назад на новом авто оклеил капот, низ дверей, пороги, места под ручками прозрачной виниловой пленкой. Впечатления - самые положительные, за 2 зимы ничего не вздулось, не треснуло, не отвалилось, не пожелтело. Покрытие выручало много раз, брало удар на себя. Например машина стояла в обычном дворе весь день капотом к окнам, какая-то сволочь, вставляя пластиковые окна, насыпала кусками(!) кирпича на капот, итог - пара малюсеньких сколов на пленке, ЛКП не пострадало совсем, а так я уверен были бы вмятины и перекрас.',
              },
              {
                text: 'Я в позапрошлом году оклеивала на новой серебристой машине бампера, пороги, низ дверей, расширители колёсных арок прозрачной глянцевой плёнкой . За две зимы ничего с ней не случилось, ни конденсата, ни помутнения, и края не отклеились. Её вообще не видно, совершенно не отличается от лака. И гудрон и грязь на мойке смываются хорошо, следов не остаётся. Я думаю, что это полезная для машины и хозяйских нервов вещь.',
              },
              {
                text: 'В 10 году вкруг черной матовой обтянул mazda 3, зимой машина на улице хранилась а живу я в Сибири, никаких проблем с пленкой не было, летом не выгорает, когда врезались в задний бампер перетягивал его заново, разницы в цвете никакой. От камней и сколов реально защищает очень хорошо.',
              },
            ].map((review, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="pt-6">
                  <div className="flex gap-2 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)"}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Свяжитесь с нами</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-white">Записаться на консультацию</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Заполните форму, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
            </div>
            <Card className="glass-effect border-white/20 premium-shadow">
              <CardContent className="pt-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wide">
                      Ваше имя
                    </label>
                    <Input id="name" placeholder="Иван Иванов" required className="h-14 text-lg bg-white/50 backdrop-blur-sm border-2 focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wide">
                      Телефон
                    </label>
                    <Input id="phone" type="tel" placeholder="+7 (900) 123-45-67" required className="h-14 text-lg bg-white/50 backdrop-blur-sm border-2 focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="car" className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wide">
                      Марка и модель автомобиля
                    </label>
                    <Input id="car" placeholder="Mercedes-Benz S-Class" required className="h-14 text-lg bg-white/50 backdrop-blur-sm border-2 focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wide">
                      Комментарий
                    </label>
                    <Textarea id="message" placeholder="Интересует премиальная тонировка..." rows={4} className="text-lg bg-white/50 backdrop-blur-sm border-2 focus:border-primary resize-none" />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg h-16 bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300 text-white font-bold text-xl">
                    <Icon name="Send" size={24} className="mr-3" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="luxury-gradient text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                  <Icon name="Car" size={32} className="text-white" />
                </div>
                <span className="font-bold text-3xl gold-shine" style={{fontFamily: "'Playfair Display', serif"}}>PREMIUM TINT</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Профессиональная тонировка и бронирование автомобилей премиум-класса в Краснодаре. Опыт более 6 лет.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 gold-shine" style={{fontFamily: "'Playfair Display', serif"}}>Навигация</h3>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Icon name={item.icon} size={16} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 gold-shine" style={{fontFamily: "'Playfair Display', serif"}}>Контакты</h3>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (900) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@autotint.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Краснодар</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 gold-shine" style={{fontFamily: "'Playfair Display', serif"}}>Премиум бренды</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• SunTek</li>
                <li>• LLumar</li>
                <li>• Sun Control</li>
                <li>• American Standard</li>
                <li>• Armolan</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoTint. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;