/* ===== GK PRO 3IN1 | Complete 3-Discipline Curriculum Data (25 Pro Drills) ===== */
window.TRACK_META = {
  '11': {
    ar: { name: 'كرة القدم 11×11', pitch: '90-120 × 45-90 م', goal: '7.32 × 2.44 م', zone: '16.5 × 40.3 م', rule: 'حارس المرمى الأساسي — اللعب باليد داخل المنطقة والقدم خارجها.' },
    en: { name: '11v11 Football', pitch: '90-120 × 45-90 m', goal: '7.32 × 2.44 m', zone: '16.5 × 40.3 m', rule: 'Standard GK regulations — handling inside penalty area, sweeper-keeper outside.' },
    fr: { name: 'Football à 11', pitch: '90-120 × 45-90 m', goal: '7.32 × 2.44 m', zone: '16.5 × 40.3 m', rule: 'Règles classiques — prise de balle à la main dans la surface.' }
  },
  '7': {
    ar: { name: 'مبتوري الأطراف 7×7 (حصري)', pitch: '50-60 × 30-40 م', goal: '5 × 2.15 م', zone: '10 × 8 م', rule: 'حارس مبتور إحدى الذراعين — يمنع مغادرة منطقة الـ10×8م، شوطان × 25 دقيقة.' },
    en: { name: '7v7 Amputee Football', pitch: '50-60 × 30-40 m', goal: '5 × 2.15 m', zone: '10 × 8 m', rule: 'Single-arm amputee GK — must remain inside the 10×8m box, 25-min halves.' },
    fr: { name: 'Foot Amputés 7v7', pitch: '50-60 × 30-40 m', goal: '5 × 2.15 m', zone: '10 × 8 m', rule: 'Gardien amputé d’un bras — interdit de quitter la zone 10×8m, 2×25 min.' }
  },
  '5': {
    ar: { name: 'كرة الصالات 5×5 (فوتسال)', pitch: '38-42 × 20-25 م', goal: '3 × 2 م', zone: 'قوس 6 م', rule: 'إرجاع الكرة باليد خلال 4 ثوانٍ — ردود فعل سريعة وإغلاق الزوايا.' },
    en: { name: '5v5 Futsal', pitch: '38-42 × 20-25 m', goal: '3 × 2 m', zone: '6m Arc', rule: '4-second distribution rule — split-saves, low blocks, and rapid reflexes.' },
    fr: { name: 'Futsal 5v5', pitch: '38-42 × 20-25 m', goal: '3 × 2 m', zone: 'Arc 6 m', rule: 'Règle des 4 secondes — arrêts bas, réflexes courts et relance rapide.' }
  }
};

window.DRILLS_DB = {
  '11': [
    {
      img: 'assets/drills/drill-02-ground-handling.svg',
      age: '8-12',
      ar: { name: 'الالتقاط الأرضي بثلاث جهات', goal: 'تأمين الكرات الأرضية السريعة باليدين والجسم خلف الكرة', steps: ['اخفض مركز الثقل مبكرًا', 'اجعل اليدين قريبتين من الأرض', 'احمِ الكرة بضمها نحو الصدر'], mistakes: ['ترك فجوة بين المرفقين', 'عدم وضع الركبة كحاجز ثانٍ'] },
      en: { name: '3-Angle Ground Handling', goal: 'Secure low shots with hands leading and body behind the ball', steps: ['Lower center of gravity early', 'Keep palms facing the ball near turf', 'Scoop and secure into chest'], mistakes: ['Gap between elbows', 'Failing to back up with knee/chest'] },
      fr: { name: 'Prise au Sol 3 Directions', goal: 'Sécuriser les frappes rasantes avec le corps en opposition', steps: ['Abaisser le centre de gravité tôt', 'Mains proches du sol face au ballon', 'Ramener le ballon vers la poitrine'], mistakes: ['Écart entre les coudes', 'Oublier le barrage du genou'] }
    },
    {
      img: 'assets/drills/drill-18-parry-side.svg',
      age: '8-12',
      ar: { name: 'إبعاد الكرة للجانب الآمن (Parry)', goal: 'توجيه الكرات القوية بعيدًا عن منطقة الخطورة ووسط المرمى', steps: ['استقبل الكرة بمعصم قوي ومرن', 'وجّه الكرة نحو الخط الجانبي أو الركنية', 'انهض فورًا لمتابعة الهجمة'], mistakes: ['إبعاد الكرة أمام المهاجمين في العمق', 'ثني المعصمين للخلف'] },
      en: { name: 'Safe Side Parry Deflection', goal: 'Redirect powerful shots away from central danger zones', steps: ['Meet ball with firm wrist and palm', 'Push deflection toward touchline/corner', 'Recover feet immediately'], mistakes: ['Parrying back into penalty spot', 'Weak wrists collapsing on impact'] },
      fr: { name: 'Déviation Latérale Sécurisée', goal: 'Repousser les frappes puissantes hors de la zone dangereuse', steps: ['Poignet ferme face au ballon', 'Dévier vers la ligne de touche', 'Se relever immédiatement'], mistakes: ['Repousser dans l’axe', 'Poignets mous à l’impact'] }
    },
    {
      img: 'assets/drills/drill-01-dropback-handling-dive.svg',
      age: '13-16',
      ar: { name: 'التراجع ومسك الكرة والارتماء القصير', goal: 'تطوير التراجع المتزن ثم الارتقاء أو الارتماء الجانبي', steps: ['تراجع بخطوات جانبية متوازنة', 'ثبّت الجذع قبل لحظة التسديد', 'ارتمِ للأمام بزاوية 45° نحو الكرة'], mistakes: ['التقاطع بين القدمين أثناء التراجع', 'الارتماء للخلف داخل خط المرمى'] },
      en: { name: 'Drop-Back Handling & Short Dive', goal: 'Balance while dropping back before an explosive side dive', steps: ['Drop back with balanced side-steps', 'Set body stance at ball strike', 'Dive forward at a 45° angle'], mistakes: ['Crossing feet while moving back', 'Diving backwards behind goal line'] },
      fr: { name: 'Recul, Prise de Balle & Plongeon Court', goal: 'Maîtriser le recul équilibré avant le plongeon offensif', steps: ['Reculer en pas chassés équilibrés', 'Fixer les appuis au moment de la frappe', 'Plonger vers l’avant à 45°'], mistakes: ['Croiser les jambes en reculant', 'Plonger vers l’arrière'] }
    },
    {
      img: 'assets/drills/drill-12-low-cross.svg',
      age: '13-16',
      ar: { name: 'قطع العرضيات الأرضية السريعة', goal: 'قراءة التمريرة العرضية وقطعها قبل وصولها للمهاجم', steps: ['اتخذ وضعية متقدمة عند خط الست ياردات', 'اقرأ قدم الممرر قبل الانطلاق', 'ارتمِ بزاوية أمامية لالتقاط الكرة أو إبعادها'], mistakes: ['البقاء على خط المرمى', 'تأخر الانطلاق بعد خروج الكرة'] },
      en: { name: 'Intercepting Fast Low Crosses', goal: 'Read and cut out driven low crosses before the striker', steps: ['Hold starting position near 6-yard line', 'Read passer’s foot before release', 'Attack forward across the pass line'], mistakes: ['Staying glued to goal line', 'Late reaction after ball release'] },
      fr: { name: 'Interception des Centres Bas', goal: 'Couper la trajectoire des centres tendus devant l’attaquant', steps: ['Se placer haut aux 5,50 m', 'Lire l’appui du passeur', 'Jaillir vers l’avant pour couper'], mistakes: ['Rester sur sa ligne', 'Démarrage tardif'] }
    },
    {
      img: 'assets/drills/drill-03-high-ball.svg',
      age: '17-18',
      ar: { name: 'الخروج للكرات العالية والعرضيات', goal: 'التقاط الكرة في أعلى نقطة مع حماية الركبة', steps: ['اقرأ مسار الكرة مبكرًا', 'ادفع الأرض بالقدم العكسية', 'ارفع الركبة لحماية الجذع وامسك بـ W'], mistakes: ['التردد في الخروج', 'القفز متأخرًا تحت الكرة'] },
      en: { name: 'High Ball & Cross Claiming', goal: 'Attack aerial crosses at peak height with knee protection', steps: ['Read ball flight early', 'Take off off inside leg', 'Raise knee shield and catch in W-shape'], mistakes: ['Hesitating off the line', 'Jumping late under the ball'] },
      fr: { name: 'Sortie Aérienne & Centres', goal: 'Capter le ballon au point le plus haut avec protection', steps: ['Lire la trajectoire tôt', 'Impulsion sur la jambe d’appui', 'Monter le genou et capter en W'], mistakes: ['Hésiter à sortir', 'Sauter sous le ballon'] }
    },
    {
      img: 'assets/drills/drill-14-rebound.svg',
      age: '17-18',
      ar: { name: 'التصدي المزدوج والمتابعة السريعة', goal: 'النهوض الانفجاري للتصدي للكرة المرتدة الثانية', steps: ['بعد التصدي الأول ادفع الأرض باليد والقدم', 'استعد التوازن ومواجهة الكرة مباشرة', 'أغلق الزاوية للتسديدة الثانية'], mistakes: ['البقاء على الأرض بعد الصد الأول', 'فقدان تتبع الكرة بعد الارتداد'] },
      en: { name: 'Double Save & Rebound Recovery', goal: 'Explosive recovery to stop the immediate second shot', steps: ['Push off turf immediately after first save', 'Re-square chest to the ball', 'Close angle for follow-up strike'], mistakes: ['Staying down after first save', 'Losing sight of ball on rebound'] },
      fr: { name: 'Double Arrêt & Relèvement Rapide', goal: 'Se relever instantanément pour bloquer la seconde frappe', steps: ['Pousser le sol juste après le 1er arrêt', 'Se réaxer face au ballon', 'Fermer l’angle sur le rebond'], mistakes: ['Rester au sol', 'Perdre le ballon des yeux'] }
    },
    {
      img: 'assets/drills/drill-04-catch-distribute.svg',
      age: 'senior',
      ar: { name: 'الالتقاط والتوزيع السريع للتحول', goal: 'بدء الهجمة المرتدة خلال 3 ثوانٍ بعد التصدي', steps: ['امسك الكرة بثبات وافتح الرؤية', 'اختر الممر الآمن (رمي يد أو ركلة جانبية)', 'أرسل الكرة أمام زميلك المنطلق'], mistakes: ['الاستعجال قبل تأمين المسك', 'التمرير لزميل تحت ضغط'] },
      en: { name: 'Catch & Rapid Counter Distribution', goal: 'Launch fast transitions within 3 seconds of a save', steps: ['Secure catch and scan field immediately', 'Pick open lane (javelin throw or side-volley)', 'Lead the running teammate'], mistakes: ['Rushing before securing ball', 'Passing into tight pressing trap'] },
      fr: { name: 'Captage & Relance Rapide', goal: 'Déclencher la contre-attaque en moins de 3 secondes', steps: ['Sécuriser la prise puis scanner', 'Choisir le couloir libre', 'Jouer dans la course du partenaire'], mistakes: ['Se précipiter avant d’assurer', 'Relancer sous pressing'] }
    },
    {
      img: 'assets/drills/drill-15-cross-call.svg',
      age: 'senior',
      ar: { name: 'القيادة الصوتية وتوجيه الدفاع', goal: 'تنظيم خط الدفاع وإصدار أمر الخروج (حارس!) بوضوح', steps: ['أصدر توجيهات قصيرة وواضحة قبل الركلات الثابتة', 'نادِ بصوت عالٍ «حارس!» عند قرار الخروج', 'أبلغ المدافعين إذا قررت البقاء «ابعِد!»'], mistakes: ['الصمت في منطقة الجزاء', 'التردد بين الخروج والبقاء'] },
      en: { name: 'Vocal Leadership & Cross Calling', goal: 'Organize defenders and call decisively ("Keeper!") on crosses', steps: ['Set defensive line before set pieces', 'Call "Keeper!" loudly when claiming', 'Call "Away!" early if staying on line'], mistakes: ['Silent penalty box', 'Indecision causing collisions'] },
      fr: { name: 'Communication & Commandement', goal: 'Diriger la défense et annoncer clairement ("Gardien!")', steps: ['Organiser le mur et le marquage', 'Crier "Gardien!" lors de la sortie', 'Annoncer "Dégagez!" si vous restez'], mistakes: ['Silence dans la surface', 'Hésitation créant des collisions'] }
    },
    {
      img: 'assets/drills/drill-21-press-distribution.svg',
      age: 'senior',
      ar: { name: 'حارس الليبيرو واللعب بالقدم تحت الضغط', goal: 'التمرير الدقيق بلمسة أو لمستين لكسر ضغط المنافس', steps: ['تحرك لفتح زاوية تمرير آمنة للمدافع', 'استقبل بالقدم البعيدة لفتح الملعب', 'مرر بدقة للاعب الوسط الحر'], mistakes: ['استلام الكرة داخل إطار المرمى', 'الاحتفاظ بالكرة طويلاً تحت الضغط'] },
      en: { name: 'Sweeper-Keeper Under High Press', goal: 'Play accurate 1-2 touch passes to break opponent pressing', steps: ['Create passing angle outside goal frame', 'Receive with back foot to open pitch', 'Pass cleanly to free midfielder'], mistakes: ['Receiving directly in front of goal', 'Holding ball too long under press'] },
      fr: { name: 'Gardien Libéro sous Pressing', goal: 'Casser le pressing en 1 ou 2 touches précises', steps: ['Offrir un angle hors du cadre', 'Contrôle orienté pied opposé', 'Trouver le milieu libre'], mistakes: ['Recevoir dans l’axe du but', 'Garder le ballon trop longtemps'] }
    }
  ],
  '7': [
    {
      img: 'assets/drills/drill-05-one-hand-ground.svg',
      age: '8-12',
      ar: { name: 'الالتقاط الأرضي بيد واحدة (مبتور 7)', goal: 'توجيه الكرة للجانب الآمن أو تثبيتها بالساعد والجذع', steps: ['اقترب من مسار الكرة بخطوة جانبية', 'اقطع الكرة بيد واحدة مائلة للأسفل', 'ثبّتها فورًا بين الساعد والصدر'], mistakes: ['مد الذراع بشكل متصلب يرتد منه الكرة', 'الارتماء المتأخر'] },
      en: { name: 'One-Hand Ground Scoop (Amputee)', goal: 'Cushion and trap low shots using one arm and chest', steps: ['Step across ball line quickly', 'Angle hand softly downward to cushion', 'Trap immediately against forearm/chest'], mistakes: ['Stiff wrist causing rebounds', 'Late body drop'] },
      fr: { name: 'Arrêt au Sol à Une Main (Amputé)', goal: 'Amortir et bloquer les frappes basses avec un seul bras', steps: ['Se placer sur la trajectoire', 'Incliner la main pour amortir', 'Bloquer contre l’avant-bras et le torse'], mistakes: ['Poignet rigide causant un rebond', 'Descente tardive'] }
    },
    {
      img: 'assets/drills/drill-13-wing-angle.svg',
      age: '8-12',
      ar: { name: 'إغلاق زاوية الجناح في ملعب المبتورين', goal: 'تغطية القائم القريب والزاوية البعيدة بتمركز ذكي', steps: ['تحرك نحو القائم القريب مع تقدم الجناح', 'حافظ على توازن الجذع واليد السليمة جاهزة', 'لا تترك القائم القريب مفتوحًا'], mistakes: ['التمركز في منتصف المرمى فقط', 'كشف الزاوية القريبة'] },
      en: { name: 'Wing Angle Closure (7v7 Amputee)', goal: 'Shut down near post and far corner with smart positioning', steps: ['Shift toward near post as winger drives', 'Keep torso balanced and active arm ready', 'Protect near post first'], mistakes: ['Standing flat in center of goal', 'Leaving near post exposed'] },
      fr: { name: 'Fermeture d’Angle Ailier (Amputés)', goal: 'Couvrir le premier poteau et le second par un placement juste', steps: ['Coulisser vers le premier poteau', 'Garder l’équilibre du buste', 'Protéger le premier poteau'], mistakes: ['Rester centré sur la ligne', 'Ouvrir le premier poteau'] }
    },
    {
      img: 'assets/drills/drill-06-one-hand-high.svg',
      age: '13-16',
      ar: { name: 'إبعاد الكرات العالية بيد واحدة', goal: 'تحويل الكرات الساقطة فوق العارضة أو للركنية بأمان', steps: ['راقب زاوية التسديد من خارج منطقة 10×8', 'ارتقِ بالقدم القريبة من القائم', 'ادفع الكرة بأطراف الأصابع خارج الإطار'], mistakes: ['دفع الكرة لوسط منطقة الجزاء', 'فقدان التوازن عند الهبوط'] },
      en: { name: 'One-Hand High Tip Over Bar', goal: 'Deflect high shots safely over crossbar or wide', steps: ['Track shot from outside 10×8m box', 'Drive off inside leg', 'Tip ball outside frame with strong palm'], mistakes: ['Parrying back into central danger zone', 'Uncontrolled landing'] },
      fr: { name: 'Claquette Haute à Une Main', goal: 'Dévier les ballons hauts au-dessus de la barre ou en corner', steps: ['Lire la frappe hors zone 10×8m', 'Impulsion dynamique', 'Dévier hors du cadre avec paume ferme'], mistakes: ['Repousser dans l’axe', 'Réception déséquilibrée'] }
    },
    {
      img: 'assets/drills/drill-16-positioning-arc.svg',
      age: '13-16',
      ar: { name: 'التمركز على القوس داخل منطقة 10×8 م', goal: 'رسم قوس ذهني يقلص مساحة المرمى أمام المسدد', steps: ['تحرك على قوس أمام المرمى تبعًا لموقع الكرة', 'ابقَ على بعد 1.5 إلى 2 متر من الخط عند التسديد', 'تجنب لمس خط المنطقة باليد أثناء الصد'], mistakes: ['الوقوف على خط المرمى بالكامل', 'الخروج خارج منطقة 10×8 م'] },
      en: { name: 'Arc Positioning Inside 10×8m Box', goal: 'Cut shooting angles along a compact arc inside the box', steps: ['Move along an arc tracking ball position', 'Stay 1.5–2m off line on shots', 'Respect 10×8m boundary strictly'], mistakes: ['Sitting deep on goal line', 'Stepping out of 10×8m box'] },
      fr: { name: 'Placement en Arc (Zone 10×8m)', goal: 'Réduire l’angle de tir en suivant un arc dans la zone', steps: ['Suivre le ballon en arc de cercle', 'Avancer à 1,5-2 m sur les frappes', 'Respecter la limite 10×8m'], mistakes: ['Coller à la ligne de but', 'Sortir de la zone'] }
    },
    {
      img: 'assets/drills/drill-07-short-dive.svg',
      age: '17-18',
      ar: { name: 'الارتماء القصير داخل منطقة 10×8 م', goal: 'رد فعل انفجاري لتغطية المرمى دون مغادرة المنطقة', steps: ['حافظ على توازنك داخل حدود 10×8 م', 'ادفع بقوة بالقدم القريبة من الكرة', 'وجه الكرة للجانب البعيد عن المهاجمين'], mistakes: ['تجاوز خط المنطقة المسموح', 'التباطؤ في النهوض بعد التصدي'] },
      en: { name: 'Explosive Short Dive (10×8m Zone)', goal: 'Cover goal corners explosively while respecting zone limits', steps: ['Stay aware of 10×8m boundary', 'Push explosively off near foot', 'Deflect wide away from rebounds'], mistakes: ['Stepping outside allowed GK zone', 'Slow recovery to feet'] },
      fr: { name: 'Plongeon Court en Zone 10×8m', goal: 'Couvrir les angles tout en restant dans la zone autorisée', steps: ['Contrôler les limites 10×8m', 'Pousser fort sur l’appui proche', 'Dévier sur le côté'], mistakes: ['Sortir de la zone gardien', 'Relèvement lent'] }
    },
    {
      img: 'assets/drills/drill-20-double-shot.svg',
      age: '17-18',
      ar: { name: 'التصدي المزدوج السريع (مبتور 7)', goal: 'الاستعداد السريع لتسديدتين متتاليتين من خارج المنطقة', steps: ['صد التسديدة الأولى نحو الجانب', 'استعد التوازن على القدمين فورًا', 'اقرأ التسديدة الثانية دون استعجال'], mistakes: ['السقوط الكامل بعد الكرة الأولى', 'إهمال تغطية الزاوية العكسية'] },
      en: { name: 'Rapid Double-Shot Save (7v7)', goal: 'Recover instantly for back-to-back long-range shots', steps: ['Deflect first strike wide', 'Snap back onto balanced feet', 'Track second shot cleanly'], mistakes: ['Overcommitting to ground on 1st shot', 'Leaving opposite post open'] },
      fr: { name: 'Double Frappe Rapide (Amputés)', goal: 'Enchaîner deux arrêts consécutifs depuis l’extérieur', steps: ['Dévier la 1re frappe sur le côté', 'Revenir vite sur ses appuis', 'Lire la 2e frappe'], mistakes: ['Tomber complètement au 1er tir', 'Oublier l’autre poteau'] }
    },
    {
      img: 'assets/drills/drill-08-one-hand-distribution.svg',
      age: 'senior',
      ar: { name: 'التوزيع السريع بيد واحدة أو بالقدم', goal: 'بدء الهجمة بدقة نحو الأجنحة بعد التصدي', steps: ['امسح الملعب بصريًا فور السيطرة', 'نفذ رمية أرضية متدحرجة أو تمريرة بالقدم', 'تجنب الرمي العشوائي في العمق'], mistakes: ['بطء اتخاذ القرار', 'تشتيت الكرة دون عنوان'] },
      en: { name: 'One-Hand & Foot Distribution', goal: 'Accurate transition passes to wingers after a save', steps: ['Scan wing lanes immediately', 'Execute clean bowling roll or foot pass', 'Avoid blind central clearances'], mistakes: ['Slow decision making', 'Uncontrolled long kicks'] },
      fr: { name: 'Relance à Une Main / au Pied', goal: 'Lancer les ailiers avec précision après l’arrêt', steps: ['Observer les couloirs aussitôt', 'Rouler le ballon ou jouer au pied', 'Éviter les dégagements axiaux risqués'], mistakes: ['Prise de décision lente', 'Relance imprécise'] }
    },
    {
      img: 'assets/drills/drill-18-parry-side.svg',
      age: 'senior',
      ar: { name: 'إبعاد الكرة باليد السليمة للخارج', goal: 'تحويل التسديدات القوية بعيدًا عن المهاجمين بعكازاتهم', steps: ['استخدم كف اليد السليمة بزاوية مائلة', 'ادفع الكرة خارج منطقة 10×8 م', 'نظّم الدفاع سريعًا للركنية'], mistakes: ['إسقاط الكرة أمام خط المنطقة', 'ترك الذراع مرتخية'] },
      en: { name: 'Single-Arm Side Parry Control', goal: 'Deflect hard shots away from attacking players', steps: ['Angle single palm outward', 'Clear ball outside 10×8m danger area', 'Reset defense for corner'], mistakes: ['Dropping ball at edge of box', 'Loose wrist on impact'] },
      fr: { name: 'Déviation Latérale à Un Bras', goal: 'Éloigner les frappes puissantes hors de portée des attaquants', steps: ['Orienter la paume vers l’extérieur', 'Dégager hors zone 10×8m', 'Replacer la défense'], mistakes: ['Relâcher devant la zone', 'Poignet faible'] }
    }
  ],
  '5': [
    {
      img: 'assets/drills/drill-09-low-block.svg',
      age: '8-12',
      ar: { name: 'الصد المنخفض (Split-Save) في الصالات', goal: 'إغلاق المساحة السفلية بالركبة والقدم أمام التسديد القريب', steps: ['ابقَ منخفضًا على أمشاط القدمين', 'مد الساق القريبة بشكل مائل للأمام', 'حافظ على استقامة الجذع واليدين جاهزتين'], mistakes: ['الارتماء المبكر قبل التسديد', 'ترك فتحة بين الساقين'] },
      en: { name: 'Futsal Low Split-Save', goal: 'Shut down close-range low shots with leg and knee block', steps: ['Stay low on balls of feet', 'Extend lead leg diagonally forward', 'Keep torso upright and hands active'], mistakes: ['Dropping too early', 'Leaving five-hole gap'] },
      fr: { name: 'Arrêt Bas Split-Save (Futsal)', goal: 'Fermer l’angle bas sur frappe à bout portant', steps: ['Rester bas sur les appuis', 'Allonger la jambe en diagonale', 'Garder le buste droit et les mains prêtes'], mistakes: ['Tomber trop tôt', 'Laisser un espace entre les jambes'] }
    },
    {
      img: 'assets/drills/drill-11-quick-throw.svg',
      age: '8-12',
      ar: { name: 'الرمية السريعة والهجمة المرتدة (صالات)', goal: 'إطلاق هجمة مرتدة فورية برمية مسطحة دقيقة', steps: ['امسك أو التقط الكرة بتركيز', 'ارفع رأسك فورًا لرؤية الزميل المنطلق', 'ارمِ الكرة بسرعة في مسار الجري'], mistakes: ['رمية عالية بطيئة', 'التأخر أكثر من ثانيتين'] },
      en: { name: 'Quick Futsal Counter Throw', goal: 'Launch instant counter-attacks with flat accurate throws', steps: ['Secure ball cleanly', 'Look up immediately for runner', 'Release flat driven throw into path'], mistakes: ['High looping throw', 'Taking too long to release'] },
      fr: { name: 'Relance Rapide à la Main (Futsal)', goal: 'Lancer la contre-attaque avec une passe tendue et précise', steps: ['Sécuriser le ballon', 'Lever la tête aussitôt', 'Lancer tendu dans la course'], mistakes: ['Lancer en cloche', 'Trop de lenteur'] }
    },
    {
      img: 'assets/drills/drill-10-one-v-one.svg',
      age: '13-16',
      ar: { name: 'المواجهة المباشرة 1 ضد 1 على القوس', goal: 'تقليص زاوية التسديد وإجبار المهاجم على الخطأ', steps: ['تقدم بخطوات قصيرة متزنة نحو الكرة', 'افتح الذراعين والساقين لحظة التسديد (X-Block)', 'لا تندفع بقدم واحدة'], mistakes: ['الانزلاق خارج المسار', 'إغلاق العينين عند التسديد القريب'] },
      en: { name: '1v1 Arc Confrontation (X-Block)', goal: 'Cut shooting angle and force attacker mistakes', steps: ['Advance with short controlled steps', 'Expand arms and legs at strike (X-Block)', 'Keep eyes on the ball'], mistakes: ['Lunging off balance', 'Turning head away on shot'] },
      fr: { name: 'Duel 1v1 sur l’Arc (Bloc en X)', goal: 'Réduire l’angle de tir et bloquer la frappe', steps: ['Avancer en pas courts contrôlés', 'Ouvrir bras et jambes à la frappe', 'Garder les yeux sur le ballon'], mistakes: ['Se jeter hors trajectoire', 'Fermer les yeux'] }
    },
    {
      img: 'assets/drills/drill-13-wing-angle.svg',
      age: '13-16',
      ar: { name: 'إغلاق زاوية الجناح والتسديد القريب', goal: 'تغطية القائم القريب ومنع التمريرة العرضية للقائم الثاني', steps: ['التصق بالقائم القريب دون ترك ثغرة', 'راقب حركة اللاعب عند القائم البعيد', 'استخدم القدم القريبة لصد التسديدة الأرضية'], mistakes: ['كشف القائم القريب', 'عدم توقع التمريرة العرضية'] },
      en: { name: 'Futsal Wing Angle & Far-Post Cover', goal: 'Seal near post while reading back-post tap-in passes', steps: ['Seal near post tightly', 'Check far-post runner in peripheral vision', 'Use near foot to block low drives'], mistakes: ['Beaten at near post', 'Ignoring back-post pass'] },
      fr: { name: 'Fermeture d’Angle Ailier (Futsal)', goal: 'Fermer le premier poteau tout en surveillant le second', steps: ['Fermer le premier poteau', 'Surveiller l’appel au second poteau', 'Bloquer du pied proche'], mistakes: ['Battu au premier poteau', 'Oublier la passe au second'] }
    },
    {
      img: 'assets/drills/drill-17-reaction.svg',
      age: '17-18',
      ar: { name: 'رد الفعل السريع من مسافة قريبة', goal: 'تحسين زمن الاستجابة للتسديدات المنحرفة والمرتدة', steps: ['حافظ على يديك أمام الجذع', 'استجب للون/الاتجاه بأقصى سرعة', 'أعد التوازن فورًا للتسديدة الثانية'], mistakes: ['الوقوف على الكعبين', 'تأخر اليدين خلف الجسم'] },
      en: { name: 'Close-Range Reflex Reaction', goal: 'Sharpen reaction speed for deflections and rebounds', steps: ['Keep hands forward in ready position', 'React explosively to visual cue', 'Recover immediately for second shot'], mistakes: ['Weight on heels', 'Hands resting behind hips'] },
      fr: { name: 'Réflexe Court à Bout Portant', goal: 'Améliorer la vitesse de réaction sur déviation', steps: ['Mains prêtes devant le buste', 'Réagir au signal instantanément', 'Se replacer pour le second ballon'], mistakes: ['Appuis sur les talons', 'Mains trop basses'] }
    },
    {
      img: 'assets/drills/drill-19-arc-positioning.svg',
      age: '17-18',
      ar: { name: 'التمركز على قوس 6 أمتار في الصالات', goal: 'التحرك العرضي السريع مع دوران الكرة بين لاعبي الخصم', steps: ['تحرك مع كل تمريرة بخطوات قصيرة دون تقاطع', 'حافظ على وضعية الاستعداد المنخفضة', 'ابقَ في منتصف زاوية التسديد دائمًا'], mistakes: ['القفز أثناء التحرك', 'التأخر في اللحاق بنقل الكرة'] },
      en: { name: '6m Arc Positioning & Ball Tracking', goal: 'Fast lateral footwork tracking rapid ball circulation', steps: ['Shuffle with short steps on every pass', 'Maintain low athletic stance', 'Stay centered on shooting bisector'], mistakes: ['Bouncing when shuffling', 'Arriving late after ball switch'] },
      fr: { name: 'Placement sur l’Arc des 6 Mètres', goal: 'Déplacements latéraux rapides sur circulation de balle', steps: ['Pas chassés courts à chaque passe', 'Rester bas sur les appuis', 'Rester sur la bissectrice'], mistakes: ['Sautiller en se déplaçant', 'Arriver en retard'] }
    },
    {
      img: 'assets/drills/drill-14-rebound.svg',
      age: 'senior',
      ar: { name: 'المتابعة السريعة للكرة المرتدة (صالات)', goal: 'منع المهاجم من إكمال الكرة المرتدة داخل القوس', steps: ['توجّه نحو الكرة فور ارتدادها', 'استخدم الصدر أو الساقين لحماية المرمى', 'ادفع الكرة بعيدًا عن منطقة الخطورة'], mistakes: ['التوقف بعد الصد الأول', 'توجيه الكرة أمام المهاجم'] },
      en: { name: 'Futsal Rebound & Second-Ball Stop', goal: 'Smother or clear rebounds inside the 6m arc immediately', steps: ['Attack rebound ball immediately', 'Use chest or leg barrier', 'Clear ball out of danger'], mistakes: ['Watching after first save', 'Rebounding straight to attacker'] },
      fr: { name: 'Arrêt sur Rebond en Futsal', goal: 'Neutraliser immédiatement le second ballon dans les 6 m', steps: ['Attaquer le rebond aussitôt', 'Faire barrage corps/jambes', 'Éloigner le ballon'], mistakes: ['Rester figé après le 1er arrêt', 'Relâcher dans l’axe'] }
    },
    {
      img: 'assets/drills/drill-21-press-distribution.svg',
      age: 'senior',
      ar: { name: 'كسر الضغط والتوزيع خلال 4 ثوانٍ', goal: 'إيصال الكرة للبيفوت (Pivot) أو الجناح تحت الضغط', steps: ['تأكد من عداد الـ4 ثوانٍ', 'استخدم رمية سريعة مسطحة أو تمريرة للبيفوت', 'تحرك لدعم الزميل كخيار تمرير'], mistakes: ['تجاوز 4 ثوانٍ', 'رمية عالية بطيئة يقطعها الخصم'] },
      en: { name: '4-Second Press Break Distribution', goal: 'Find Pivot or winger accurately under high press', steps: ['Respect the 4-second rule', 'Use flat driven throw or pass to Pivot', 'Support teammate as back-pass option'], mistakes: ['4-second violation', 'Lofted slow throw intercepted'] },
      fr: { name: 'Relance sous Pressing (4 sec)', goal: 'Trouver le Pivot ou l’ailier en moins de 4 secondes', steps: ['Respecter la règle des 4 secondes', 'Relance tendue ou passe au Pivot', 'Rester en soutien'], mistakes: ['Dépassement des 4 secondes', 'Relance en cloche interceptée'] }
    }
  ]
};
