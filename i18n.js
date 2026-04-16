/**
 * DOHWA RESOURCE DEVELOPMENT — i18n Language System
 * Supports: EN (English), VI (Vietnamese), JP (Japanese)
 */

const translations = {
  // ===================== SHARED / NAV =====================
  nav_home:          { en: 'Home',          vi: 'Trang Chủ',        jp: 'ホーム' },
  nav_about:         { en: 'About Us',      vi: 'Giới Thiệu',       jp: '会社概要' },
  nav_products:      { en: 'Products',      vi: 'Sản Phẩm',         jp: '製品' },
  nav_certifications:{ en: 'Certifications',vi: 'Chứng Nhận',       jp: '認証' },
  nav_contact:       { en: 'Contact',       vi: 'Liên Hệ',          jp: 'お問い合わせ' },
  nav_get_quote:     { en: 'Get a Quote',   vi: 'Báo Giá',          jp: '見積依頼' },

  // ===================== SHARED / FOOTER =====================
  footer_pioneering: {
    en: 'Pioneering renewable biomass energy solutions through large-scale wood pellet production and global export logistics.',
    vi: 'Tiên phong giải pháp năng lượng sinh khối tái tạo thông qua sản xuất viên nén gỗ quy mô lớn và xuất khẩu toàn cầu.',
    jp: '大規模な木質ペレット生産とグローバルな輸出ロジスティクスにより、再生可能なバイオマスエネルギーソリューションを先導します。'
  },
  footer_pioneering_alt: {
    en: 'Pioneering renewable energy through advanced biomass technology and ethical resource management.',
    vi: 'Tiên phong năng lượng tái tạo qua công nghệ sinh khối tiên tiến và quản lý tài nguyên có đạo đức.',
    jp: '先進的なバイオマス技術と倫理的な資源管理による再生可能エネルギーの先導。'
  },
  footer_leading: {
    en: 'Leading the industrial transition to sustainable biomass energy through precision manufacturing and verified supply chains.',
    vi: 'Dẫn đầu quá trình chuyển đổi công nghiệp sang năng lượng sinh khối bền vững thông qua sản xuất chính xác và chuỗi cung ứng được xác minh.',
    jp: '精密製造と検証済みサプライチェーンを通じて、持続可能なバイオマスエネルギーへの産業転換をリードします。'
  },
  footer_leading_contact: {
    en: 'Leading the renewable energy transition through sustainable wood resource development and global biomass supply chain excellence.',
    vi: 'Dẫn đầu chuyển đổi năng lượng tái tạo thông qua phát triển tài nguyên gỗ bền vững và chuỗi cung ứng sinh khối toàn cầu.',
    jp: '持続可能な木材資源開発とグローバルなバイオマスサプライチェーンの卓越性を通じて、再生可能エネルギー転換をリードします。'
  },
  footer_quick_links:  { en: 'Quick Links',    vi: 'Liên Kết Nhanh',  jp: 'クイックリンク' },
  footer_support:      { en: 'Support',         vi: 'Hỗ Trợ',          jp: 'サポート' },
  footer_open_for:     { en: 'Open For Discussion', vi: 'Liên Hệ Thảo Luận', jp: 'お問い合わせ可能' },
  footer_navigation:   { en: 'Navigation',      vi: 'Điều Hướng',      jp: 'ナビゲーション' },
  footer_connect:      { en: 'Connect',         vi: 'Kết Nối',          jp: 'コネクト' },
  footer_legal:        { en: 'Legal',           vi: 'Pháp Lý',          jp: '法的情報' },
  footer_company:      { en: 'Company',         vi: 'Công Ty',          jp: '会社' },
  footer_global_desk:  { en: 'Global Desk',     vi: 'Văn Phòng Toàn Cầu', jp: 'グローバルデスク' },
  footer_privacy:      { en: 'Privacy Policy',  vi: 'Chính Sách Bảo Mật', jp: 'プライバシーポリシー' },
  footer_terms:        { en: 'Terms of Service',vi: 'Điều Khoản Dịch Vụ', jp: '利用規約' },
  footer_env_impact:   { en: 'Environmental Impact', vi: 'Tác Động Môi Trường', jp: '環境への影響' },
  footer_sustain_report:{ en: 'Sustainability Report', vi: 'Báo Cáo Phát Triển Bền Vững', jp: 'サステナビリティレポート' },
  footer_contact_us:   { en: 'Contact Us',      vi: 'Liên Hệ Chúng Tôi', jp: 'お問い合わせ' },
  footer_linkedin:     { en: 'Linkedin',        vi: 'Linkedin',         jp: 'LinkedIn' },
  footer_news:         { en: 'Corporate News',  vi: 'Tin Tức Công Ty',  jp: '企業ニュース' },
  footer_news_short:   { en: 'News',            vi: 'Tin Tức',          jp: 'ニュース' },
  footer_copyright:    { en: '© 2024 DOHWA RESOURCE DEVELOPMENT. All Rights Reserved.', vi: '© 2024 DOHWA RESOURCE DEVELOPMENT. Bảo lưu mọi quyền.', jp: '© 2024 DOHWA RESOURCE DEVELOPMENT. 無断複写・転載を禁じます。' },
  footer_address_label:{ en: 'Address:', vi: 'Địa chỉ:', jp: '住所：' },
  footer_email_label:  { en: 'Email:', vi: 'Email:', jp: 'メール：' },
  footer_phone_label:  { en: 'Phone:', vi: 'Điện thoại:', jp: '電話：' },
  footer_capacity_label:{ en: 'Capacity:', vi: 'Công suất:', jp: '生産能力：' },
  footer_land_label:   { en: 'Land Use:', vi: 'Diện tích:', jp: '土地使用：' },
  footer_material_label:{ en: 'Material:', vi: 'Nguyên liệu:', jp: '原材料：' },
  footer_address_val:  { en: 'Hon La Seaport Industrial Park, Phu Trach Commune, Quang Tri Province', vi: 'Khu Công nghiệp Cảng Hòn La, Xã Phú Trạch, Tỉnh Quảng Bình', jp: '工業団地ホンラ港、フートラック村、クアンビン省' },
  footer_material_val: { en: 'We purchase raw materials from Ha Tinh and Quang Tri provinces.', vi: 'Chúng tôi thu mua nguyên liệu từ các tỉnh Hà Tĩnh và Quảng Trị.', jp: '原材料はハティン省とクアンチ省から調達しています。' },
  footer_address_index:{ en: 'Hon La Seaport Industrial Park, Phu Trach Commune, Quang Tri Province', vi: 'Khu Công nghiệp Cảng Hòn La, Xã Phú Trạch, Tỉnh Quảng Bình', jp: '工業団地ホンラ港、フートラック村、クアンビン省' },
  footer_global_desk_val: {
    en: 'Hon La Industrial Zone\nQuang Binh, VN 510000\n\nMon - Fri: 08:00 - 18:00 (GMT+7)',
    vi: 'Khu CN Hòn La\nQuảng Bình, VN 510000\n\nThứ 2 - Thứ 6: 08:00 - 18:00 (GMT+7)',
    jp: 'ホンラ工業団地\nクアンビン、VN 510000\n\n月〜金: 08:00 - 18:00 (GMT+7)'
  },
  footer_update:       { en: 'Updated: April 8, 2026 | Build v2.1.2', vi: 'Cập nhật: 8 tháng 4, 2026 | Phiên bản v2.1.2', jp: '更新日: 2026年4月8日 | ビルド v2.1.2' },
  sidenav_quote:       { en: 'Request Quote', vi: 'Yêu Cầu Báo Giá', jp: '見積依頼' },

  // ===================== INDEX PAGE =====================
  idx_badge:       { en: "Vietnam's Leading Manufacturer", vi: 'Nhà Sản Xuất Hàng Đầu Việt Nam', jp: 'ベトナムのトップメーカー' },
  idx_hero_h1:     { en: 'tons/year capacity', vi: 'tấn/năm công suất', jp: 'トン/年の生産能力' },
  idx_hero_p:      {
    en: 'Leading Wood Pellet Manufacturer in Vietnam, driving global energy transitions with industrial scale and organic precision.',
    vi: 'Nhà sản xuất viên nén gỗ hàng đầu Việt Nam, thúc đẩy chuyển đổi năng lượng toàn cầu với quy mô công nghiệp và độ chính xác hữu cơ.',
    jp: 'ベトナムを代表する木質ペレットメーカーとして、産業規模と有機的な精度でグローバルなエネルギー転換を推進します。'
  },
  idx_btn_explore: { en: 'Explore Products', vi: 'Xem Sản Phẩm', jp: '製品を見る' },
  idx_btn_profile: { en: 'Company Profile',  vi: 'Hồ Sơ Công Ty', jp: '会社概要' },

  idx_values_h2:   { en: 'Core Operational Values', vi: 'Giá Trị Hoạt Động Cốt Lõi', jp: 'コアオペレーショナルバリュー' },
  idx_values_p:    { en: 'Pillars of our commitment to industrial excellence and environmental stewardship.', vi: 'Các trụ cột cam kết của chúng tôi về sự xuất sắc trong công nghiệp và bảo vệ môi trường.', jp: '工業的卓越性と環境管理へのコミットメントの柱。' },
  idx_val1_h3:     { en: 'Quality', vi: 'Chất Lượng', jp: '品質' },
  idx_val1_p:      { en: 'Rigorous laboratory testing ensuring high calorific value and minimal ash content for industrial boilers.', vi: 'Kiểm tra phòng thí nghiệm nghiêm ngặt đảm bảo giá trị nhiệt lượng cao và hàm lượng tro tối thiểu cho lò hơi công nghiệp.', jp: '産業用ボイラーに向けた高い発熱量と最小限の灰分を確保する厳格な実験室試験。' },
  idx_val2_h3:     { en: 'Logistics', vi: 'Hậu Cần', jp: '物流' },
  idx_val2_p:      { en: 'End-to-end supply chain management with proximity to major deep-water ports for seamless export.', vi: 'Quản lý chuỗi cung ứng đầu cuối với vị trí gần các cảng nước sâu lớn để xuất khẩu liền mạch.', jp: 'シームレスな輸出のための主要深水港近くでのエンドツーエンドのサプライチェーン管理。' },
  idx_val3_h3:     { en: 'Sustainability', vi: 'Bền Vững', jp: '持続可能性' },
  idx_val3_p:      { en: '100% renewable raw materials sourced from managed forests, reducing global carbon footprints.', vi: '100% nguyên liệu thô tái tạo được lấy từ rừng được quản lý, giảm lượng khí thải carbon toàn cầu.', jp: '管理された森林から調達した100%再生可能な原材料で、グローバルなカーボンフットプリントを削減します。' },
  idx_val4_h3:     { en: 'Conscientious', vi: 'Có Đạo Đức', jp: '誠実' },
  idx_val4_p:      { en: 'Dedicated ethical labor practices and community development initiatives in manufacturing regions.', vi: 'Thực hành lao động đạo đức tận tâm và các sáng kiến phát triển cộng đồng tại các khu vực sản xuất.', jp: '製造地域における献身的な倫理的労働慣行とコミュニティ開発への取り組み。' },

  idx_process_badge: { en: 'Operational Excellence', vi: 'Xuất Sắc Vận Hành', jp: '運営の卓越性' },
  idx_process_h2:  { en: 'Wood Pellet Production Process', vi: 'Quy Trình Sản Xuất Viên Nén Gỗ', jp: '木質ペレット製造プロセス' },
  idx_step1_h4:    { en: 'Sourcing & Preparation', vi: 'Thu Mua & Sơ Chế', jp: '原料調達と前処理' },
  idx_step1_p:     { en: 'Raw material (Acacia, Eucalyptus) undergoes debarking (up to 90% purity) and chipping into uniform fiber.', vi: 'Nguyên liệu thô (Keo, Bạch đàn) được bóc vỏ (độ tinh khiết lên đến 90%) và chặt thành sợi đồng nhất.', jp: '原材料（アカシア、ユーカリ）は剥皮処理（純度最大90%）を経て均一な繊維状にチッピング。' },
  idx_step2_h4:    { en: 'Refinement & Drying', vi: 'Tinh Lọc & Sấy Khô', jp: '精製と乾燥' },
  idx_step2_p:     { en: 'Hammer mills pulverize wood into fine material, while magnetic separators remove impurities before entering high-efficiency dryers.', vi: 'Máy nghiền búa nghiền gỗ thành vật liệu mịn, trong khi bộ tách từ loại bỏ tạp chất trước khi đưa vào máy sấy hiệu suất cao.', jp: 'ハンマーミルで木材を微細な材料に粉砕し、磁気セパレーターで不純物を除去した後、高効率乾燥機に投入します。' },
  idx_step3_h4:    { en: 'Precision Pelletizing', vi: 'Tạo Viên Nén Chính Xác', jp: '精密ペレット化' },
  idx_step3_p:     { en: 'Fine material is extruded through heavy-duty pelletizing dies to create high-density, energy-rich pellets.', vi: 'Vật liệu mịn được ép qua khuôn tạo viên hạng nặng để tạo ra các viên nén mật độ cao, giàu năng lượng.', jp: '微細な材料を業務用ペレタイジングダイを通じて押し出し、高密度でエネルギー豊富なペレットを製造。' },
  idx_step4_h4:    { en: 'Cooling & Global Export', vi: 'Làm Mát & Xuất Khẩu Toàn Cầu', jp: '冷却とグローバル輸出' },
  idx_step4_p:     { en: 'Final pellets are cooled, screened for quality, and shipped globally via major regional ports.', vi: 'Viên nén thành phẩm được làm mát, kiểm tra chất lượng và vận chuyển toàn cầu qua các cảng khu vực lớn.', jp: '最終ペレットは冷却・品質検査後、主要地域港を経由して世界中に出荷されます。' },

  idx_goals_badge: { en: 'Future Goals', vi: 'Mục Tiêu Tương Lai', jp: '将来の目標' },
  idx_goals_h2:    { en: 'Global Sector', vi: 'Lãnh Đạo Ngành', jp: 'グローバル業界' },
  idx_goals_h2_span:{ en: 'Leadership.', vi: 'Toàn Cầu.', jp: 'リーダーシップ。' },
  idx_goal1_h4:    { en: '100k Capacity Target', vi: 'Mục Tiêu 100k Tấn', jp: '100kトン生産目標' },
  idx_goal1_p:     { en: 'Reaching operational stability of 100,000 tons/year from Q1/2026, ensuring sustainable supply across Quang Tri & Ha Tinh.', vi: 'Đạt ổn định vận hành 100.000 tấn/năm từ Q1/2026, đảm bảo cung ứng bền vững cho Quảng Trị & Hà Tĩnh.', jp: '2026年第1四半期より年間100,000トンの安定稼働を達成し、クアンチ&ハティン全域への持続可能な供給を確保。' },
  idx_goal2_h4:    { en: 'Top 5 Exporter Vision', vi: 'Mục Tiêu Top 5 Xuất Khẩu', jp: 'トップ5輸出業者ビジョン' },
  idx_goal2_p:     { en: 'Becoming a top 5 Vietnamese wood pellet exporter, supplying I2 standard products to Japan, Korea, and EU markets.', vi: 'Trở thành Top 5 nhà xuất khẩu viên nén gỗ Việt Nam, cung cấp sản phẩm tiêu chuẩn I2 cho thị trường Nhật Bản, Hàn Quốc và EU.', jp: 'ベトナムのトップ5木質ペレット輸出業者となり、日本・韓国・EUにI2規格製品を供給。' },
  idx_goal3_h4:    { en: 'Quality Benchmarks', vi: 'Tiêu Chuẩn Chất Lượng', jp: '品質ベンチマーク' },
  idx_goal3_p:     { en: 'Full maintenance and integration of ISO 9001, ISO 14001, and PEFC-COC certification systems by 2026.', vi: 'Duy trì và tích hợp đầy đủ hệ thống chứng nhận ISO 9001, ISO 14001 và PEFC-COC vào năm 2026.', jp: '2026年までにISO 9001、ISO 14001、PEFC-COC認証システムの完全維持と統合。' },

  idx_cert_badge:  { en: 'International Standards', vi: 'Tiêu Chuẩn Quốc Tế', jp: '国際基準' },
  idx_cert_h2:     { en: 'Global Trust, Certified Locally.', vi: 'Tin Tưởng Toàn Cầu, Chứng Nhận Địa Phương.', jp: 'グローバルな信頼、ローカル認証。' },
  idx_cert1_h4:    { en: 'PEFC™ Chain of Custody', vi: 'Chuỗi Hành Trình Sản Phẩm PEFC™', jp: 'PEFC™ 認証の管理 (CoC)' },
  idx_cert1_p:     { en: 'Ensuring every ton of wood pellet is traceable back to sustainably managed forests.', vi: 'Đảm bảo mỗi tấn viên nén gỗ có thể truy xuất nguồn gốc đến rừng được quản lý bền vững.', jp: '木質ペレット1トンごとに持続可能に管理された森林への追跡可能性を確保。' },
  idx_cert2_h4:    { en: 'ISO 9001:2015', vi: 'ISO 9001:2015', jp: 'ISO 9001:2015' },
  idx_cert2_p:     { en: 'International quality management systems applied across all production lines.', vi: 'Hệ thống quản lý chất lượng quốc tế được áp dụng trên tất cả dây chuyền sản xuất.', jp: '全生産ラインに適用された国際品質管理システム。' },
  idx_cert_badge2: { en: 'Export Compliance Rating', vi: 'Tỷ Lệ Tuân Thủ Xuất Khẩu', jp: '輸出コンプライアンス評価' },

  idx_specs_h2:    { en: 'Technical Specifications', vi: 'Thông Số Kỹ Thuật', jp: '技術仕様' },
  idx_spec1_label: { en: 'Moisture Content', vi: 'Độ Ẩm', jp: '水分含有量' },
  idx_spec2_label: { en: 'Ash Content',     vi: 'Hàm Lượng Tro', jp: '灰分' },
  idx_spec3_label: { en: 'Calorific Value', vi: 'Giá Trị Nhiệt Lượng', jp: '発熱量' },
  idx_spec4_label: { en: 'Diameter',        vi: 'Đường Kính', jp: '直径' },

  idx_cta_h3:      { en: "Partner with Vietnam's Wood Resource Leaders.", vi: 'Hợp Tác Cùng Đơn Vị Dẫn Đầu Tài Nguyên Gỗ Việt Nam.', jp: 'ベトナムの木材資源リーダーとのパートナーシップ。' },
  idx_cta_p:       { en: 'Discuss your bulk requirements with our logistics and technical teams today.', vi: 'Hãy thảo luận nhu cầu đặt hàng số lượng lớn của bạn với đội ngũ hậu cần và kỹ thuật của chúng tôi ngay hôm nay.', jp: '今すぐ弊社の物流・技術チームと大量注文のご要件についてご相談ください。' },
  idx_cta_btn:     { en: 'Initiate Partnership Inquiry', vi: 'Gửi Yêu Cầu Hợp Tác', jp: 'パートナーシップのお問い合わせ' },

  // ===================== ABOUT US PAGE =====================
  about_badge:     { en: 'Established 2012', vi: 'Thành Lập Năm 2012', jp: '2012年設立' },
  about_h1_main:   { en: 'Forging the Future of', vi: 'Kiến Tạo Tương Lai Của Năng Lượng', jp: '未来を切り拓く' },
  about_h1_span:   { en: 'Sustainable', vi: 'Bền Vững', jp: '持続可能な' },
  about_h1_end:    { en: 'Energy.', vi: '', jp: 'エネルギー。' },
  about_h1_p:      {
    en: 'About Us — DOHWA RESOURCE DEVELOPMENT is a global leader in high-performance wood pellet production, bridging heavy industry and environmental stewardship.',
    vi: 'Giới Thiệu — DOHWA RESOURCE DEVELOPMENT là doanh nghiệp dẫn đầu toàn cầu trong sản xuất viên nén gỗ hiệu suất cao, kết nối công nghiệp nặng và bảo vệ môi trường.',
    jp: '会社概要 — DOHWA RESOURCE DEVELOPMENTは、高性能木質ペレット生産における世界的リーダーであり、重工業と環境管理を橋渡しします。'
  },
  about_hub_h2:    { en: 'Strategic Manufacturing Hub', vi: 'Trung Tâm Sản Xuất Chiến Lược', jp: '戦略的製造拠点' },
  about_hub_p:     {
    en: 'Our primary manufacturing facility represents the pinnacle of biomass technology. Strategically located to minimize transport carbon, our plant integrates automated processing with strict quality controls to ensure every pellet meets international premium standards.',
    vi: 'Cơ sở sản xuất chính của chúng tôi đại diện cho đỉnh cao của công nghệ sinh khối. Được đặt vị trí chiến lược để giảm thiểu carbon vận chuyển, nhà máy của chúng tôi tích hợp quy trình tự động với kiểm soát chất lượng nghiêm ngặt để đảm bảo mỗi viên nén đều đạt tiêu chuẩn quốc tế cao cấp.',
    jp: '主要製造施設はバイオマス技術の頂点を体現しています。輸送によるCO₂排出を最小化するため戦略的に配置され、自動化処理と厳格な品質管理を統合し、すべてのペレットが国際高品質基準を満たすよう取り組んでいます。'
  },
  about_prod_area_label: { en: 'Production Area', vi: 'Diện Tích Sản Xuất', jp: '生産エリア' },
  about_prod_area_p:     { en: 'Expansive integrated facility for processing and logistics.', vi: 'Cơ sở tích hợp rộng lớn phục vụ chế biến và hậu cần.', jp: '加工・物流のための広大な統合施設。' },
  about_tech_label:      { en: 'Technology', vi: 'Công Nghệ', jp: 'テクノロジー' },
  about_tech_p:          { en: 'Andritz heavy-duty machinery for precision compression.', vi: 'Máy móc hạng nặng Andritz cho nén chính xác.', jp: '精密圧縮のためのアンドリッツ重機。' },
  about_location_h4:     { en: 'Industrial Zone VI', vi: 'Khu Công Nghiệp VI', jp: '工業団地VI' },
  about_location_p:      { en: 'Binh Duong Province, Vietnam', vi: 'Tỉnh Bình Dương, Việt Nam', jp: 'ビンズオン省、ベトナム' },

  about_vision_h3: { en: 'Our Vision', vi: 'Tầm Nhìn Của Chúng Tôi', jp: '私たちのビジョン' },
  about_vision_p:  {
    en: '"To redefine industrial energy as a circular, harmonious exchange with our planet\'s natural resources, becoming the global benchmark for carbon-neutral fuel."',
    vi: '"Định nghĩa lại năng lượng công nghiệp như một sự trao đổi tuần hoàn, hài hòa với tài nguyên thiên nhiên của hành tinh, trở thành tiêu chuẩn toàn cầu về nhiên liệu trung hòa carbon."',
    jp: '「工業エネルギーを地球の天然資源との循環的・調和的な交換として再定義し、カーボンニュートラル燃料の世界的な指標となる。」'
  },
  about_mission_h3:{ en: 'Our Mission', vi: 'Sứ Mệnh Của Chúng Tôi', jp: '私たちのミッション' },
  about_mission_p: {
    en: 'Through relentless innovation in biomass engineering and transparent supply chain management, we provide global markets with consistent, ultra-efficient energy solutions that honor both economic and ecological demands.',
    vi: 'Thông qua đổi mới không ngừng trong kỹ thuật sinh khối và quản lý chuỗi cung ứng minh bạch, chúng tôi cung cấp cho thị trường toàn cầu các giải pháp năng lượng nhất quán, siêu hiệu quả, đáp ứng cả nhu cầu kinh tế và sinh thái.',
    jp: 'バイオマス工学の絶え間ない革新と透明なサプライチェーン管理を通じて、経済的・生態学的要求の両方を尊重する一貫した超高効率なエネルギーソリューションをグローバル市場に提供します。'
  },

  about_decade_h2: { en: 'A Decade of Sustainable Growth', vi: 'Một Thập Kỷ Phát Triển Bền Vững', jp: '持続可能な成長の10年' },
  about_decade_p:  { en: 'Tracking our evolution from a regional supplier to a global resource partner.', vi: 'Theo dõi sự phát triển của chúng tôi từ nhà cung cấp khu vực đến đối tác tài nguyên toàn cầu.', jp: '地域サプライヤーからグローバル資源パートナーへの進化を追跡。' },
  about_2012_h4:   { en: 'Foundation', vi: 'Thành Lập', jp: '設立' },
  about_2012_p:    { en: 'Establishment of DOHWA Resource in South Korea, focusing on R&D for high-caloric wood pellet variants and securing sustainable forestry partnerships.', vi: 'Thành lập DOHWA Resource tại Hàn Quốc, tập trung vào R&D cho các biến thể viên nén gỗ nhiệt lượng cao và đảm bảo quan hệ đối tác lâm nghiệp bền vững.', jp: '韓国でDOHWA Resourceを設立。高カロリー木質ペレットの研究開発と持続可能な林業パートナーシップの確保に注力。' },
  about_2016_h4:   { en: 'Global Expansion', vi: 'Mở Rộng Toàn Cầu', jp: 'グローバル展開' },
  about_2016_p:    { en: 'Commissioning of the first automated facility in Southeast Asia, reaching an annual capacity of 100,000 metric tons and obtaining FSC certification.', vi: 'Khai trương cơ sở tự động hóa đầu tiên tại Đông Nam Á, đạt công suất hàng năm 100.000 tấn và đạt chứng chỉ FSC.', jp: '東南アジア初の自動化施設を稼働。年間10万メートルトンの生産能力に達し、FSC認証を取得。' },
  about_2021_h4:   { en: 'Innovation Leap', vi: 'Bước Nhảy Đổi Mới', jp: 'イノベーションの飛躍' },
  about_2021_p:    { en: 'Introduction of the G3 Premium series. Full digitalization of the production line, achieving a 99.8% consistency rate in ash content management.', vi: 'Ra mắt dòng sản phẩm G3 Premium. Số hóa hoàn toàn dây chuyền sản xuất, đạt tỷ lệ nhất quán 99,8% trong quản lý hàm lượng tro.', jp: 'G3プレミアムシリーズを導入。生産ラインの完全デジタル化により、灰分管理の一貫性99.8%を達成。' },

  // ===================== PRODUCT PAGE =====================
  prod_badge:      { en: 'Premium Biofuel Solution', vi: 'Giải Pháp Nhiên Liệu Sinh Học Cao Cấp', jp: 'プレミアムバイオ燃料ソリューション' },
  prod_h1_span:    { en: 'High-Density', vi: 'Mật Độ Cao', jp: '高密度' },
  prod_h1_end:     { en: 'Wood Pellets', vi: 'Viên Nén Gỗ', jp: '木質ペレット' },
  prod_hero_p:     {
    en: "Dohwa's wood pellets are engineered for maximum calorific efficiency and minimal ash residue, sourcing sustainable raw materials across Southeast Asia.",
    vi: 'Viên nén gỗ của Dohwa được thiết kế để đạt hiệu quả nhiệt lượng tối đa và dư lượng tro tối thiểu, sử dụng nguyên liệu thô bền vững từ khắp Đông Nam Á.',
    jp: 'DOHWAの木質ペレットは、東南アジア全域から持続可能な原材料を調達し、最大の熱効率と最小の灰残渣を実現するよう設計されています。'
  },
  prod_btn_pdf:    { en: 'Download PDF Specifications', vi: 'Tải Thông Số Kỹ Thuật PDF', jp: 'PDF仕様書をダウンロード' },

  prod_specs_h2:   { en: 'Technical Specifications', vi: 'Thông Số Kỹ Thuật', jp: '技術仕様' },
  prod_specs_p:    {
    en: 'Our production standards strictly adhere to ENplus A1 and A2 certifications, ensuring consistent burn rates and equipment longevity for industrial power plants and residential heating.',
    vi: 'Tiêu chuẩn sản xuất của chúng tôi tuân thủ nghiêm ngặt các chứng nhận ENplus A1 và A2, đảm bảo tốc độ đốt nhất quán và tuổi thọ thiết bị cho các nhà máy điện công nghiệp và hệ thống sưởi dân dụng.',
    jp: '当社の生産基準はENplus A1およびA2認証に厳密に準拠しており、産業用発電所や家庭用暖房システムに対して一定の燃焼速度と設備寿命を保証します。'
  },
  prod_diameter:   { en: 'Diameter', vi: 'Đường Kính', jp: '直径' },
  prod_length:     { en: 'Length', vi: 'Chiều Dài', jp: '長さ' },
  prod_ash:        { en: 'Ash Content', vi: 'Hàm Lượng Tro', jp: '灰分' },
  prod_moisture:   { en: 'Moisture', vi: 'Độ Ẩm', jp: '水分' },
  prod_caloric:    { en: 'Calorific Value', vi: 'Giá Trị Nhiệt Lượng', jp: '発熱量' },

  prod_chars_h3:   { en: 'Physical Characteristics', vi: 'Đặc Tính Vật Lý', jp: '物理的特性' },
  prod_texture_h4: { en: 'Texture', vi: 'Kết Cấu', jp: 'テクスチャー' },
  prod_texture_p:  { en: 'Smooth, glossy exterior indicating high-pressure extrusion and low moisture intake during storage.', vi: 'Bề ngoài mịn, bóng cho thấy quá trình ép đùn áp suất cao và ít hấp thụ độ ẩm khi bảo quản.', jp: '高圧押出と保管時の低吸湿性を示す滑らかで光沢のある外観。' },
  prod_durab_h4:   { en: 'Durability', vi: 'Độ Bền', jp: '耐久性' },
  prod_durab_p:    { en: 'Mechanical durability ≥ 98%, designed for bulk transport and automated feeding systems without degradation.', vi: 'Độ bền cơ học ≥ 98%, được thiết kế để vận chuyển số lượng lớn và hệ thống cấp liệu tự động mà không bị phân hủy.', jp: '機械的耐久性≥98%で、劣化なしのバルク輸送と自動供給システム向けに設計。' },
  prod_macro:      { en: 'Macro Analysis — Premium Grade A1', vi: 'Phân Tích Vĩ Mô — Cấp Cao A1', jp: 'マクロ分析 — プレミアムグレードA1' },

  prod_grade_h2:   { en: 'Industrial Grade Standards', vi: 'Tiêu Chuẩn Cấp Công Nghiệp', jp: '産業グレード基準' },
  prod_grade_p:    { en: 'Our products exceed standard parameters for industrial and residential use, ensuring maximum heat output and minimum maintenance.', vi: 'Sản phẩm của chúng tôi vượt các thông số tiêu chuẩn cho mục đích sử dụng công nghiệp và dân dụng, đảm bảo sản lượng nhiệt tối đa và bảo trì tối thiểu.', jp: '当社製品は産業用・家庭用の標準パラメータを超え、最大の熱出力と最小限のメンテナンスを実現。' },
  prod_kcal_label: { en: 'kcal/kg', vi: 'kcal/kg', jp: 'kcal/kg' },
  prod_kcal_p:     { en: 'High energy density specifically optimized for furnace efficiency and reduced fuel consumption.', vi: 'Mật độ năng lượng cao được tối ưu hóa đặc biệt cho hiệu quả lò đốt và giảm tiêu thụ nhiên liệu.', jp: '炉効率の向上と燃料消費量の削減に特化して最適化された高エネルギー密度。' },
  prod_n_label:    { en: 'Nitrogen Content', vi: 'Hàm Lượng Nitơ', jp: '窒素含有量' },
  prod_n_p:        { en: 'Low nitrogen and sulfur emissions, fully compliant with international environmental regulations.', vi: 'Phát thải nitơ và lưu huỳnh thấp, hoàn toàn tuân thủ các quy định môi trường quốc tế.', jp: '低窒素・低硫黄排出で、国際環境規制に完全準拠。' },
  prod_dur_label:  { en: 'Durability', vi: 'Độ Bền', jp: '耐久性' },
  prod_dur_p:      { en: 'High mechanical integrity ensures minimal fine particles during shipping and pneumatic handling.', vi: 'Tính toàn vẹn cơ học cao đảm bảo ít hạt mịn trong quá trình vận chuyển và xử lý khí nén.', jp: '高い機械的完全性により、輸送と空気圧搬送時の微粉発生を最小限に抑制。' },

  // ===================== CERTIFICATION PAGE =====================
  cert_badge:      { en: 'Global Standards', vi: 'Tiêu Chuẩn Toàn Cầu', jp: 'グローバル基準' },
  cert_h1:         { en: 'Sustainability &', vi: 'Bền Vững &', jp: '持続可能性と' },
  cert_h1_line2:   { en: 'Technical Precision', vi: 'Độ Chính Xác Kỹ Thuật', jp: '技術的精度' },
  cert_hero_p:     {
    en: 'Our commitment to international quality standards ensures that every shipment of wood pellets meets the most rigorous environmental and thermal efficiency criteria.',
    vi: 'Cam kết của chúng tôi với các tiêu chuẩn chất lượng quốc tế đảm bảo rằng mỗi lô hàng viên nén gỗ đều đáp ứng các tiêu chí môi trường và hiệu quả nhiệt nghiêm ngặt nhất.',
    jp: '国際品質基準への当社のコミットメントにより、すべての木質ペレットの出荷が最も厳格な環境基準と熱効率基準を満たすことを保証します。'
  },
  cert_featured_h2:{ en: 'Featured Certification', vi: 'Chứng Nhận Nổi Bật', jp: '注目の認証' },
  cert_pefc_p:     {
    en: 'The Programme for the Endorsement of Forest Certification (PEFC) validates our supply chain, ensuring all wood resources are sourced from sustainably managed forests.',
    vi: 'Chương trình Chứng nhận Quản lý Rừng (PEFC) xác nhận chuỗi cung ứng của chúng tôi, đảm bảo mọi tài nguyên gỗ đều được lấy từ rừng được quản lý bền vững.',
    jp: '森林認証承認プログラム（PEFC）は、すべての木材資源が持続可能に管理された森林から調達されていることを検証するサプライチェーンを認定します。'
  },
  cert_view_btn:   { en: 'View Details', vi: 'Xem Chi Tiết', jp: '詳細を見る' },
  cert_dl_btn:     { en: 'Download PDF', vi: 'Tải PDF', jp: 'PDFをダウンロード' },
  cert_view_short: { en: 'VIEW', vi: 'XEM', jp: '表示' },
  cert_dl_short:   { en: 'DOWNLOAD', vi: 'TẢI XUỐNG', jp: 'ダウンロード' },

  cert_tech_h2:    { en: 'Technical Compliance', vi: 'Tuân Thủ Kỹ Thuật', jp: '技術的コンプライアンス' },
  cert_tech_p:     { en: 'Verified quality standards for global export.', vi: 'Tiêu chuẩn chất lượng được xác minh cho xuất khẩu toàn cầu.', jp: 'グローバル輸出のための検証済み品質基準。' },
  cert_iso_p:      { en: 'Quality management systems ensuring consistent product output and customer satisfaction.', vi: 'Hệ thống quản lý chất lượng đảm bảo đầu ra sản phẩm nhất quán và sự hài lòng của khách hàng.', jp: '一貫した製品品質と顧客満足を確保する品質管理システム。' },
  cert_sgs_p:      { en: 'Independent lab verification of moisture content, ash percentage, and calorific value.', vi: 'Xác minh phòng thí nghiệm độc lập về hàm lượng độ ẩm, tỷ lệ tro và giá trị nhiệt lượng.', jp: '水分含有量、灰分率、発熱量の独立した実験室検証。' },
  cert_vina_p:     { en: "Local inspection certification ensuring compliance with Vietnam's export regulations.", vi: 'Chứng nhận kiểm tra tại địa phương đảm bảo tuân thủ quy định xuất khẩu của Việt Nam.', jp: 'ベトナムの輸出規制への準拠を確保する現地検査認証。' },

  cert_coc_h2:     { en: 'Chain of Custody (CoC) Process', vi: 'Quy Trình Chuỗi Hành Trình Sản Phẩm (CoC)', jp: '管理の連鎖（CoC）プロセス' },
  cert_coc_p:      {
    en: 'Tracking the path of products from the forest to the consumer, including all successive stages of processing, transformation, manufacturing, and distribution.',
    vi: 'Theo dõi hành trình sản phẩm từ rừng đến người tiêu dùng, bao gồm tất cả các giai đoạn liên tiếp của chế biến, chuyển đổi, sản xuất và phân phối.',
    jp: '森林から消費者への製品の経路を、加工・変換・製造・流通のすべての連続段階を含めて追跡。'
  },
  cert_step1_h5:   { en: 'Sustainable Harvest', vi: 'Thu Hoạch Bền Vững', jp: '持続可能な収穫' },
  cert_step1_p:    { en: 'PEFC Certified Forest Management', vi: 'Quản Lý Rừng Được Chứng Nhận PEFC', jp: 'PEFC認定森林管理' },
  cert_step2_h5:   { en: 'Refining & Pelletizing', vi: 'Tinh Lọc & Tạo Viên', jp: '精製とペレット化' },
  cert_step2_p:    { en: 'Controlled Factory Processing', vi: 'Quy Trình Nhà Máy Được Kiểm Soát', jp: '管理された工場処理' },
  cert_step3_h5:   { en: 'Quality Control', vi: 'Kiểm Soát Chất Lượng', jp: '品質管理' },
  cert_step3_p:    { en: 'SGS Laboratory Verification', vi: 'Xác Minh Phòng Thí Nghiệm SGS', jp: 'SGS実験室検証' },
  cert_step4_h5:   { en: 'Global Logistics', vi: 'Hậu Cần Toàn Cầu', jp: 'グローバル物流' },
  cert_step4_p:    { en: 'Secure Export & Delivery', vi: 'Xuất Khẩu & Giao Hàng An Toàn', jp: '安全な輸出と配送' },

  // ===================== CONTACT PAGE =====================
  contact_badge:   { en: 'Direct Partnership', vi: 'Hợp Tác Trực Tiếp', jp: 'ダイレクトパートナーシップ' },
  contact_h1:      { en: 'B2B Inquiry', vi: 'Liên Hệ Doanh Nghiệp (B2B)', jp: 'B2Bお問い合わせ' },
  contact_p:       {
    en: 'Connect with our distribution team for global wood pellet supply. Provide your company details below for a customized technical specification and volume pricing.',
    vi: 'Kết nối với đội ngũ phân phối của chúng tôi để cung cấp viên nén gỗ toàn cầu. Cung cấp thông tin công ty của bạn bên dưới để nhận thông số kỹ thuật và báo giá theo số lượng.',
    jp: 'グローバルな木質ペレット供給のための販売チームにお問い合わせください。カスタマイズされた技術仕様と数量別価格のために会社情報をご記入ください。'
  },
  contact_fullname:   { en: 'Full Name', vi: 'Họ và Tên', jp: '氏名' },
  contact_company:    { en: 'Company Name', vi: 'Tên Công Ty', jp: '会社名' },
  contact_email:      { en: 'Business Email', vi: 'Email Doanh Nghiệp', jp: 'ビジネスメール' },
  contact_phone:      { en: 'Phone Number', vi: 'Số Điện Thoại', jp: '電話番号' },
  contact_message:    { en: 'Message / Specific Requirements', vi: 'Tin Nhắn / Yêu Cầu Cụ Thể', jp: 'メッセージ / 具体的なご要望' },
  contact_msg_ph:     { en: 'Volume requirements, destination port, etc.', vi: 'Yêu cầu số lượng, cảng đích, v.v.', jp: '数量要件、仕向け港など' },
  contact_submit:     { en: 'Submit Inquiry', vi: 'Gửi Yêu Cầu', jp: 'お問い合わせを送信' },
  contact_hq_h2:      { en: 'Factory Headquarters', vi: 'Trụ Sở Nhà Máy', jp: '工場本社' },
  contact_global_h4:  { en: 'Global Operations', vi: 'Hoạt Động Toàn Cầu', jp: 'グローバルオペレーション' },
  contact_global_p:   { en: 'Near Hon La Seaport, Quang Trach District,\nQuang Binh Province, Vietnam', vi: 'Gần Cảng Hòn La, Huyện Quảng Trạch,\nTỉnh Quảng Bình, Việt Nam', jp: 'ホンラ港近郊、クアンチャック郡、\nクアンビン省、ベトナム' },
  contact_email_h4:   { en: 'Electronic Mail', vi: 'Email', jp: '電子メール' },
  contact_phone_h4:   { en: 'Support Line', vi: 'Đường Dây Hỗ Trợ', jp: 'サポートライン' },
};

// ===================== ENGINE =====================
const LANG_KEY = 'dohwa_lang';

function getCurrentLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations(lang);
  updateLangSwitcher(lang);
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.textContent = translations[key][lang];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.placeholder = translations[key][lang];
    }
  });
}

function updateLangSwitcher(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const l = btn.getAttribute('data-lang');
    if (l === lang) {
      btn.classList.add('text-emerald-700', 'font-black', 'underline');
      btn.classList.remove('text-emerald-900/50', 'font-bold');
    } else {
      btn.classList.remove('text-emerald-700', 'font-black', 'underline');
      btn.classList.add('text-emerald-900/50', 'font-bold');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getCurrentLang();
  applyTranslations(lang);
  updateLangSwitcher(lang);
});
