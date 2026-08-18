import { Artwork } from '../types';

export const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: 'Little House Under the Starry Sky',
    titleBengali: 'তারাভরা আকাশের নিচে ছোট্ট ঘর',
    category: 'Folk Art',
    image: '/assets/1.jpeg',
    description:
      'A charming hand-stitched textile artwork featuring a colorful little house surrounded by trees, flowers and a dreamy star-filled night sky. The bright embroidery creates a warm village-inspired story on dark fabric.',
    descriptionBengali:
      'কালো কাপড়ের বুকে রঙিন সুতোর ফোঁড়ে ফুটে উঠেছে ছোট্ট একটি ঘর, গাছপালা, ফুল আর তারাভরা রাতের আকাশ। সরল অথচ মায়াময় গ্রামবাংলার গল্প যেন এই সেলাইয়ের প্রতিটি ফোঁড়ে জীবন্ত হয়ে উঠেছে।',
    featured: true,
    aspect: 'square',
    technique: 'Hand embroidery, satin stitch, outline stitch & decorative threadwork',
    details: [
      'Hand-stitched textile artwork',
      'Dark fabric base',
      'Colorful floral and nature motifs',
      'Detailed decorative threadwork'
    ]
  },

  {
    id: 2,
    title: 'Birds, Flowers & Greenery',
    titleBengali: 'পাখি, ফুল ও সবুজের নকশা',
    category: 'Floral & Nature',
    image: '/assets/2.jpeg',
    description:
      'A vibrant embroidery composition on dark fabric, filled with delicate flowers, leaves, birds and flowing decorative patterns. The colorful threadwork gives the piece a lively handmade character.',
    descriptionBengali:
      'গাঢ় কাপড়ের উপর রঙিন সুতোর কাজে ফুটে উঠেছে ফুল, পাতা ও পাখির মনোরম নকশা। প্রকৃতির নানা উপাদানকে একসঙ্গে মিলিয়ে তৈরি হয়েছে একটি প্রাণবন্ত হস্তশিল্প।',
    featured: true,
    aspect: 'square',
    technique: 'Floral embroidery, running stitch, stem stitch & decorative filling',
    details: [
      'Hand embroidery',
      'Floral and bird motifs',
      'Multi-colored threadwork',
      'Decorative border detailing'
    ]
  },

  {
    id: 3,
    title: 'Delicate Floral Vine',
    titleBengali: 'নরম রঙের ফুলেল লতিকা',
    category: 'Floral & Nature',
    image: '/assets/3.jpeg',
    description:
      'A soft textile embroidery featuring repeated floral stems and leaves in gentle shades. The flowing arrangement creates a calm and elegant botanical pattern across the fabric.',
    descriptionBengali:
      'হালকা রঙের কাপড়ের উপর নরম রঙের ফুল ও পাতার লতিকা দিয়ে তৈরি সূক্ষ্ম নকশা। প্রকৃতির শান্ত সৌন্দর্যকে সেলাইয়ের মাধ্যমে ফুটিয়ে তোলা হয়েছে।',
    featured: true,
    aspect: 'portrait',
    technique: 'Stem stitch, leaf embroidery & floral threadwork',
    details: [
      'Fine fabric embroidery',
      'Botanical floral pattern',
      'Soft multi-color palette',
      'Repeated hand-stitched motifs'
    ]
  },

  {
    id: 4,
    title: 'Village Woman by the River',
    titleBengali: 'নদীর ধারে গ্রামবাংলার নারী',
    category: 'Bengali Art',
    image: '/assets/4.jpeg',
    description:
      'A narrative textile artwork depicting a traditional Bengali village scene with a woman near the river, surrounded by hills, trees and water. The stitched landscape creates the feeling of a peaceful rural journey.',
    descriptionBengali:
      'নদী, পাহাড়, গাছপালা আর গ্রামবাংলার এক নারীর উপস্থিতিতে তৈরি হয়েছে একটি মনোমুগ্ধকর দৃশ্যকাহিনি। সুতোর কাজে বাংলার শান্ত গ্রামীণ পরিবেশকে কাপড়ের উপর জীবন্ত করে তোলা হয়েছে।',
    featured: true,
    aspect: 'landscape',
    technique: 'Narrative embroidery, running stitch & landscape threadwork',
    details: [
      'Hand-stitched landscape',
      'Bengali village-inspired scene',
      'River and nature motifs',
      'Detailed figure embroidery'
    ]
  },

  {
    id: 5,
    title: 'Blooming Floral Pattern',
    titleBengali: 'ফুলে ভরা নরম নকশা',
    category: 'Floral & Nature',
    image: '/assets/5.jpeg',
    description:
      'A close view of delicate floral embroidery arranged across light-colored fabric. Soft petals, stems and leaves create a graceful repeating textile pattern.',
    descriptionBengali:
      'হালকা কাপড়ের উপর সারি সারি ফুল, পাতা ও ডালের সূক্ষ্ম সেলাই। নরম রঙের এই ফুলেল নকশা কাপড়টিকে আরও কোমল ও সুন্দর করে তুলেছে।',
    featured: true,
    aspect: 'portrait',
    technique: 'Floral embroidery, stem stitch & fine thread detailing',
    details: [
      'Light fabric base',
      'Floral repeating pattern',
      'Fine hand stitching',
      'Soft pastel-inspired threadwork'
    ]
  },

  {
    id: 6,
    title: 'Village Story in Embroidery',
    titleBengali: 'সেলাইয়ের ফোঁড়ে গ্রামের গল্প',
    category: 'Folk Art',
    image: '/assets/6.jpeg',
    description:
      'A framed textile artwork illustrating a colorful village-inspired scene. Buildings, trees, figures and decorative elements come together to create a storybook-like composition.',
    descriptionBengali:
      'ফ্রেমে বাঁধানো এই সূচিশিল্পে গড়ে উঠেছে একটি সম্পূর্ণ গ্রামের গল্প। ঘরবাড়ি, গাছপালা ও মানুষের উপস্থিতি মিলিয়ে তৈরি হয়েছে গল্পের বইয়ের মতো একটি দৃশ্য।',
    featured: true,
    aspect: 'landscape',
    technique: 'Narrative hand embroidery & fine outline stitching',
    details: [
      'Framed textile artwork',
      'Village scene composition',
      'Fine colorful threadwork',
      'Decorative landscape details'
    ]
  },

  {
    id: 7,
    title: 'A Story Framed in Thread',
    titleBengali: 'ফ্রেমে বাঁধানো সুতোর গল্প',
    category: 'Bengali Art',
    image: '/assets/7.jpeg',
    description:
      'A carefully framed embroidered scene where colorful figures, nature and surroundings are built entirely through detailed needlework.',
    descriptionBengali:
      'রঙিন সুতোর সূক্ষ্ম কাজে তৈরি একটি সম্পূর্ণ দৃশ্যচিত্র। ফ্রেমের মধ্যে মানুষের জীবন ও প্রকৃতির নানা উপাদান মিলিয়ে তৈরি হয়েছে এক অনন্য সেলাইয়ের গল্প।',
    featured: true,
    aspect: 'square',
    technique: 'Fine hand embroidery & narrative stitchwork',
    details: [
      'Hand-embroidered artwork',
      'Traditional framed presentation',
      'Detailed figures and scenery',
      'Layered colorful threadwork'
    ]
  },

  {
    id: 8,
    title: 'Pastel Flower Garden',
    titleBengali: 'প্যাস্টেল রঙের ফুলবাগান',
    category: 'Floral & Nature',
    image: '/assets/8.jpeg',
    description:
      'A delicate floral textile featuring clusters of soft-colored flowers and leaves. The subtle palette gives the handmade piece a peaceful and elegant appearance.',
    descriptionBengali:
      'হালকা নীল, গোলাপি, হলুদ ও সবুজের কোমল রঙে তৈরি ফুল ও পাতার নকশা। সাদামাটা কাপড়ের উপর এই ফুলেল সেলাই যেন ছোট্ট একটি শান্ত বাগান।',
    featured: false,
    aspect: 'landscape',
    technique: 'Floral embroidery, satin stitch & leaf detailing',
    details: [
      'Soft floral composition',
      'Pastel-inspired thread colors',
      'Hand-stitched flowers',
      'Natural leaf motifs'
    ]
  },

  {
    id: 9,
    title: 'Village Life in a Wooden Frame',
    titleBengali: 'কাঠের ফ্রেমে গ্রামবাংলার জীবন',
    category: 'Folk Art',
    image: '/assets/9.jpeg',
    description:
      'A framed embroidered artwork capturing a colorful rural scene with people, buildings and landscape details. The composition feels like a small window into everyday village life.',
    descriptionBengali:
      'কাঠের ফ্রেমের মধ্যে সেলাইয়ের ফোঁড়ে ফুটে উঠেছে গ্রামবাংলার মানুষের জীবন ও চারপাশের পরিবেশ। ছোট্ট একটি ছবির মধ্যে যেন লুকিয়ে আছে বড় একটি গল্প।',
    featured: true,
    aspect: 'landscape',
    technique: 'Narrative embroidery & detailed figure stitching',
    details: [
      'Wood-framed textile artwork',
      'Rural life theme',
      'Detailed scene composition',
      'Colorful hand embroidery'
    ]
  },

  {
    id: 10,
    title: 'Colors of Village Life',
    titleBengali: 'গ্রামজীবনের রঙিন গল্প',
    category: 'Bengali Art',
    image: '/assets/10.jpeg',
    description:
      'A richly detailed framed embroidery portraying a colorful rural setting. People, homes and the surrounding landscape are carefully represented through layered threadwork.',
    descriptionBengali:
      'রঙিন সুতোর স্তরে স্তরে তৈরি হয়েছে গ্রামবাংলার একটি জীবন্ত দৃশ্য। মানুষ, ঘরবাড়ি ও প্রকৃতির মিলনে তৈরি এই কাজটি একটি সম্পূর্ণ গল্পের মতো মনে হয়।',
    featured: true,
    aspect: 'landscape',
    technique: 'Narrative hand embroidery & layered threadwork',
    details: [
      'Framed textile artwork',
      'Village-inspired composition',
      'Layered colorful stitches',
      'Detailed environmental motifs'
    ]
  },

  {
    id: 11,
    title: 'Flowers on White Fabric',
    titleBengali: 'সাদা কাপড়ে ফুলের নকশা',
    category: 'Floral & Nature',
    image: '/assets/11.jpeg',
    description:
      'A graceful floral embroidery pattern featuring soft flowers and green stems across a light fabric surface.',
    descriptionBengali:
      'সাদা কাপড়ের উপর নরম রঙের ফুল ও সবুজ ডালের সূক্ষ্ম সেলাই। সরলতার মধ্যেই এই কাজটির সৌন্দর্য লুকিয়ে আছে।',
    featured: false,
    aspect: 'portrait',
    technique: 'Floral embroidery & stem stitch',
    details: [
      'Light textile base',
      'Floral motifs',
      'Fine stem detailing',
      'Soft color combination'
    ]
  },

  {
    id: 12,
    title: 'Elegant Floral Embroidery',
    titleBengali: 'সুন্দর ফুলেল সূচিশিল্প',
    category: 'Floral & Nature',
    image: '/assets/12.jpeg',
    description:
      'A close textile detail showing hand-stitched flowers arranged along flowing stems on a light fabric.',
    descriptionBengali:
      'হালকা কাপড়ের উপর ফুল ও লতানো ডালের সূক্ষ্ম সেলাই। কাছ থেকে দেখলে প্রতিটি ফোঁড়ের পরিশ্রম ও সৌন্দর্য আরও স্পষ্ট হয়ে ওঠে।',
    featured: false,
    aspect: 'portrait',
    technique: 'Fine floral embroidery & decorative stitching',
    details: [
      'Detailed floral motifs',
      'Hand-stitched stems',
      'Light fabric',
      'Decorative threadwork'
    ]
  },

  {
    id: 13,
    title: 'Floral Border Embroidery',
    titleBengali: 'ফুলেল পাড়ের সূচিকর্ম',
    category: 'Textile Art',
    image: '/assets/13.jpeg',
    description:
      'A delicate embroidered textile featuring a decorative floral border along the edge of light-colored fabric.',
    descriptionBengali:
      'হালকা কাপড়ের প্রান্তজুড়ে ফুল ও পাতার নকশায় তৈরি হয়েছে একটি সুন্দর সূচিকর্মের পাড়।',
    featured: false,
    aspect: 'landscape',
    technique: 'Border embroidery, stem stitch & floral detailing',
    details: [
      'Decorative textile border',
      'Floral edge pattern',
      'Fine hand stitching',
      'Light fabric foundation'
    ]
  },

  {
    id: 14,
    title: 'Corner Floral Detail',
    titleBengali: 'কোণজুড়ে ফুলের নকশা',
    category: 'Textile Art',
    image: '/assets/14.jpeg',
    description:
      'A close-up view of carefully stitched floral and leafy motifs arranged along the corner of a textile.',
    descriptionBengali:
      'কাপড়ের কোণজুড়ে ফুল, পাতা ও ডালের সূক্ষ্ম নকশা। ছোট জায়গার মধ্যেও সুন্দরভাবে সাজানো হয়েছে প্রতিটি সেলাই।',
    featured: false,
    aspect: 'landscape',
    technique: 'Fine floral embroidery & corner motif stitching',
    details: [
      'Corner textile design',
      'Floral and leaf motifs',
      'Detailed hand embroidery',
      'Decorative composition'
    ]
  },

  {
    id: 16,
    title: 'Decorative Embroidered Border',
    titleBengali: 'রঙিন সূচিকর্মের পাড়',
    category: 'Textile Art',
    image: '/assets/16.jpeg',
    description:
      'A vertical textile detail decorated with a flowing embroidered border of colorful floral and ornamental motifs.',
    descriptionBengali:
      'লম্বা কাপড়ের উপর রঙিন ফুল ও অলংকারধর্মী মোটিফ দিয়ে তৈরি হয়েছে সুন্দর একটি সূচিকর্মের পাড়।',
    featured: false,
    aspect: 'portrait',
    technique: 'Border embroidery, running stitch & decorative motifs',
    details: [
      'Vertical embroidered border',
      'Colorful threadwork',
      'Floral ornamental motifs',
      'Fine textile detailing'
    ]
  },

  {
    id: 17,
    title: 'Hand-Stitched Floral Border',
    titleBengali: 'হাতে সেলাই করা ফুলেল পাড়',
    category: 'Textile Art',
    image: '/assets/17.jpeg',
    description:
      'A detailed vertical embroidery piece showing a colorful decorative border with flowers, leaves and ornamental elements.',
    descriptionBengali:
      'ফুল, পাতা ও নানা অলংকারধর্মী মোটিফের সমন্বয়ে তৈরি একটি দীর্ঘ ফুলেল পাড়। প্রতিটি অংশ হাতে সেলাই করে সাজানো হয়েছে।',
    featured: false,
    aspect: 'portrait',
    technique: 'Hand embroidery, outline stitch & decorative filling',
    details: [
      'Hand-stitched border',
      'Floral and ornamental motifs',
      'Vertical textile composition',
      'Multi-colored embroidery threads'
    ]
  },

  {
    id: 18,
    title: 'Embroidery Design in Progress',
    titleBengali: 'সেলাইয়ের নকশা তৈরির মুহূর্ত',
    category: 'Behind the Stitch',
    image: '/assets/18.jpeg',
    description:
      'A textile design showing the planning and pattern work behind a handmade embroidery piece. The visible lines and motifs reveal the beginning of the creative process.',
    descriptionBengali:
      'হাতে তৈরি সূচিশিল্পের আগে কাপড়ের উপর নকশা তৈরির একটি গুরুত্বপূর্ণ ধাপ। রেখা ও মোটিফের মাধ্যমে ধীরে ধীরে গড়ে ওঠে সম্পূর্ণ কাজটি।',
    featured: false,
    aspect: 'landscape',
    technique: 'Textile pattern drawing & embroidery preparation',
    details: [
      'Embroidery preparation stage',
      'Hand-planned textile design',
      'Visible pattern work',
      'Foundation for hand stitching'
    ]
  },

  {
    id: 19,
    title: 'Hand-Drawn Textile Pattern',
    titleBengali: 'কাপড়ের উপর হাতে আঁকা নকশা',
    category: 'Behind the Stitch',
    image: '/assets/19.jpeg',
    description:
      'A close view of a textile surface prepared with hand-drawn design elements before the detailed embroidery begins.',
    descriptionBengali:
      'সূচিকর্ম শুরু হওয়ার আগে কাপড়ের উপর হাতে তৈরি নকশার একটি দৃশ্য। এই প্রস্তুতিই পরবর্তী সেলাইয়ের ভিত্তি তৈরি করে।',
    featured: false,
    aspect: 'landscape',
    technique: 'Hand-drawn pattern preparation',
    details: [
      'Pre-embroidery design',
      'Hand-drawn textile pattern',
      'Detailed planning stage',
      'Traditional craft process'
    ]
  },

  {
    id: 20,
    title: 'Traditional Embroidery Pattern',
    titleBengali: 'ঐতিহ্যবাহী সূচিকর্মের নকশা',
    category: 'Behind the Stitch',
    image: '/assets/20.jpeg',
    description:
      'A detailed textile preparation showing the underlying pattern used to guide the hand embroidery.',
    descriptionBengali:
      'হাতে সেলাই করার জন্য কাপড়ের উপর তৈরি করা নকশার সূক্ষ্ম বিবরণ। প্রতিটি রেখা পরবর্তী সূচিকর্মের পথ নির্দেশ করে।',
    featured: false,
    aspect: 'landscape',
    technique: 'Pattern drawing & traditional embroidery preparation',
    details: [
      'Embroidery guide pattern',
      'Textile preparation',
      'Hand-drawn details',
      'Traditional craft process'
    ]
  },

  {
    id: 21,
    title: 'Embroidery Work on Fine Fabric',
    titleBengali: 'কাপড়ের উপর সূচিকর্মের কাজ',
    category: 'Textile Art',
    image: '/assets/21.jpeg',
    description:
      'A textile piece showing delicate embroidery work and decorative motifs arranged across a light fabric surface.',
    descriptionBengali:
      'হালকা কাপড়ের উপর সূক্ষ্ম সেলাই ও আলংকারিক মোটিফের কাজ। কাপড়ের সৌন্দর্যের সঙ্গে সুতোর নকশা মিলিয়ে তৈরি হয়েছে একটি কোমল হস্তশিল্প।',
    featured: false,
    aspect: 'landscape',
    technique: 'Fine hand embroidery & decorative textile stitching',
    details: [
      'Fine fabric embroidery',
      'Decorative stitched motifs',
      'Handcrafted textile',
      'Detailed needlework'
    ]
  }
];