# Faiza Candle House Website

## ফাইল
- `index.html` — ওয়েবসাইটের কনটেন্ট
- `style.css` — Pink & White ডিজাইন
- `script.js` — পণ্য, কার্ট, ফিল্টার ও WhatsApp অর্ডার

## নিজের পণ্যের ছবি যোগ করা
1. প্রজেক্ট ফোল্ডারের মধ্যে `images` নামে একটি ফোল্ডার তৈরি করুন।
2. নিজের তোলা ছবিগুলো সেখানে রাখুন, যেমন `flower-candle.jpg`।
3. `script.js` ফাইলে পণ্যের `image: ""` অংশে ফাইলের পথ লিখুন, যেমন `image: "images/flower-candle.jpg"`।
4. সব পণ্যের আসল নাম, দাম ও বর্ণনা একই `products` তালিকায় সম্পাদনা করুন।
5. Hero/About অংশের ছবির placeholder-গুলো বদলাতে চাইলে `index.html`-এ সংশ্লিষ্ট `photo-placeholder` অংশে নিজের `<img>` যোগ করতে পারেন।

## WhatsApp
`script.js`-এ `WHATSAPP_NUMBER = "8801323111484"` সেট করা আছে। `wa.me` লিংকে বাংলাদেশের নম্বর দিতে শুরুতে `88` যোগ হয় এবং প্রথম `0` বাদ যায়।

## GitHub Pages-এ প্রকাশ
1. GitHub-এ লগইন করে `New repository` চাপুন।
2. Repository name দিন `faiza-candle-house`।
3. Public নির্বাচন করে repository তৈরি করুন।
4. `Add file` → `Upload files` থেকে `index.html`, `style.css`, `script.js` এবং `images` ফোল্ডার আপলোড করুন।
5. `Commit changes` চাপুন।
6. Repository-র `Settings` → `Pages` খুলুন।
7. Build and deployment অংশে `Deploy from a branch` নির্বাচন করুন।
8. Branch হিসেবে `main` এবং folder হিসেবে `/(root)` নির্বাচন করে `Save` চাপুন।
9. কিছুক্ষণ পরে Pages পেজে দেওয়া ওয়েবসাইট লিংক খুলুন।

## গুরুত্বপূর্ণ
এটি static website। অর্ডার ফর্মে তথ্য পূরণ করে WhatsApp-এ অর্ডারের মেসেজ তৈরি হবে; গ্রাহককে WhatsApp-এ গিয়ে Send চাপতে হবে। এই সংস্করণে কোনো ডেটাবেজ নেই, তাই ফর্মের তথ্য ওয়েবসাইটে স্থায়ীভাবে জমা হয় না। পণ্যের নমুনা দাম ও বর্ণনা প্রকাশের আগে অবশ্যই নিজের তথ্য দিয়ে বদলে নিন।


আপডেট: ছবি বড় করে দেখা ও WhatsApp Quick Order
- আপনার ছবিগুলো faiza-candle-house/image/ ফোল্ডারে রাখুন।
- script.js-এ image/image1.jpg থেকে image/image8.jpg পর্যন্ত পাথ সেট করা আছে।
- আপনার ফাইলের নাম/ফোল্ডারের নাম আলাদা হলে script.js-এ image পাথ মিলিয়ে নিন।
- পণ্যের ছবিতে ক্লিক করলে বড় ছবি, নাম, দাম, কার্টে যোগ ও WhatsApp-এ সরাসরি অর্ডার অপশন দেখা যাবে।
- কার্টের মাধ্যমে একাধিক পণ্য একসঙ্গে অর্ডার করার সুবিধাও থাকবে।
