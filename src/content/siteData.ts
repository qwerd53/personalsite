import type { Bilingual } from "@/i18n/translations";

export const siteConfig = {
  basePath: "/personalsite",
};

export type StatItem = {
  label: Bilingual;
  value: Bilingual;
};

export type LinkItem = {
  label: Bilingual;
  href?: string;
  placeholder?: boolean;
};

export type ResearchItem = {
  title: Bilingual;
  status: Bilingual;
  period: Bilingual;
  summary: Bilingual;
  challenge: Bilingual;
  method: Bilingual;
  validation: Bilingual;
  stack: string[];
  metrics: StatItem[];
};

export type ProjectItem = {
  title: Bilingual;
  role: Bilingual;
  period: Bilingual;
  summary: Bilingual;
  impact: Bilingual;
  stack: string[];
};

export type TimelineItem = {
  label: Bilingual;
  detail: Bilingual;
};

export const navigation = [
  { label: { en: "Research", zh: "研究" }, href: "#research" },
  { label: { en: "Projects", zh: "项目" }, href: "#projects" },
  { label: { en: "About", zh: "关于" }, href: "#about" },
  { label: { en: "Honors", zh: "荣誉" }, href: "#honors" },
  { label: { en: "Contact", zh: "联系" }, href: "#contact" },
];

export const profile = {
  name: { en: "Dongyang Wang", zh: "王冬阳" },
  headline: {
    en: "AI Researcher focused on Multimodal VLM, 6D Object Pose Estimation, and Vision-Centered Intelligent Systems.",
    zh: "人工智能研究者，专注于多模态视觉语言模型、6D物体姿态估计和以视觉为中心的智能系统。",
  },
  intro: {
    en: "I build research-grade computer vision systems that connect semantic understanding, geometric reasoning, and deployable engineering.",
    zh: "我构建研究级计算机视觉系统，将语义理解、几何推理和可部署工程相结合。",
  },
  secondary: {
    en: "My work spans multimodal perception, pose estimation, OpenCV pipelines, model optimization, and experimental validation for both academic and real-world settings.",
    zh: "我的工作涵盖多模态感知、姿态估计、OpenCV流水线、模型优化以及面向学术和实际场景的实验验证。",
  },
  location: { en: "Chengdu, China", zh: "中国·成都" },
  email: "dongyang0125@foxmail.com",
  availability: {
    en: "Available for academic collaboration and internships",
    zh: "开放学术合作与实习机会",
  },
  stats: [
    {
      label: { en: "Blue Bridge Cup", zh: "蓝桥杯" },
      value: { en: "National 1st Place", zh: "全国一等奖" },
    },
    {
      label: { en: "CET-6", zh: "英语六级" },
      value: { en: "538", zh: "538" },
    },
    {
      label: { en: "Core Courses", zh: "核心课程" },
      value: { en: "10+ scored 95+", zh: "10+门成绩95分以上" },
    },
    {
      label: { en: "Research Focus", zh: "研究方向" },
      value: { en: "VLM + 6D Pose", zh: "VLM + 6D姿态" },
    },
  ],
};

export const researchItems: ResearchItem[] = [
  {
    title: {
      en: "Bridging Language and Geometry: Training-Free 6D Pose Estimation via Language-Guided Geometric Priors",
      zh: "连接语言与几何：基于语言引导几何先验的免训练6D物体姿态估计",
    },
    status: { en: "Selected Research", zh: "重点研究" },
    period: { en: "Sep 2025 – Apr 2026", zh: "2025年9月至2026年4月" },
    summary: {
      en: "A training-free dense matching framework that decouples semantic perception from geometric pose estimation for robust 6D object understanding.",
      zh: "一个无需训练的密集匹配框架，将语义感知与几何姿态估计解耦，实现鲁棒的6D物体理解。",
    },
    challenge: {
      en: "The project addresses the instability of direct cross-modal matching when object semantics and geometry are entangled in cluttered scenes.",
      zh: "该项目解决了在杂乱场景中，物体语义与几何信息纠缠时直接跨模态匹配不稳定的问题。",
    },
    method: {
      en: "I designed a mask-guided dense matching strategy, combined CLIP and Swin-Base for mask prediction, and completed point cloud registration with rigid transformation estimation.",
      zh: "我设计了掩码引导的密集匹配策略，结合CLIP和Swin-Base进行掩码预测，并完成了点云配准与刚体变换估计。",
    },
    validation: {
      en: "The method has been validated on 3 mainstream datasets and has shown strong gains over prior state-of-the-art baselines under both GT-mask and predicted-mask settings.",
      zh: "该方法已在三个主流数据集上验证，在GT掩码和预测掩码设置下均显著超越先前的最先进基线方法。",
    },
    stack: [
      "Python",
      "PyTorch",
      "CLIP",
      "Swin Transformer",
      "OpenCV",
      "Point Cloud Registration",
    ],
    metrics: [
      {
        label: { en: "Datasets", zh: "数据集" },
        value: { en: "3 Benchmarks", zh: "3个基准" },
      },
      {
        label: { en: "ADD(S)-0.1d", zh: "ADD(S)-0.1d" },
        value: { en: "83.0% GT Mask", zh: "GT掩码 83.0%" },
      },
      {
        label: { en: "Predicted Mask", zh: "预测掩码" },
        value: { en: "35.9%", zh: "35.9%" },
      },
      {
        label: { en: "Paper Status", zh: "论文状态" },
        value: { en: "Journal Submission", zh: "期刊投稿中" },
      },
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: {
      en: "Weed Detection in Farmland Environments",
      zh: "农田环境杂草检测",
    },
    role: { en: "Core Lead, 1 of 5", zh: "核心负责人，五人之一" },
    period: { en: "Mar 2023 – Sep 2023", zh: "2023年3月至9月" },
    summary: {
      en: "Built the full training-to-deployment pipeline for an agricultural vision system based on VGG16, with a strong focus on practical inference performance.",
      zh: "构建了基于VGG16的农业视觉系统从训练到部署的完整流水线，重点关注实际推理性能。",
    },
    impact: {
      en: "Improved model effectiveness in field testing to over 85% accuracy and helped the project earn a provincial prize in the National Computer Design Competition.",
      zh: "将模型在田间测试中的效果提升至85%以上准确率，帮助项目获得全国计算机设计竞赛省级奖项。",
    },
    stack: [
      "Python",
      "PyTorch",
      "VGG16",
      "OpenCV",
      "Intel OneAPI",
      "Model Quantization",
    ],
  },
  {
    title: {
      en: "Production-Oriented ML Engineering for Competition Systems",
      zh: "面向竞赛系统的生产级机器学习工程",
    },
    role: {
      en: "Data Processing, Classical ML, Flask Development",
      zh: "数据处理、经典机器学习、Flask开发",
    },
    period: { en: "2024", zh: "2024年" },
    summary: {
      en: "Delivered image preprocessing, text augmentation, classical regression and classification workflows, and a Flask-based hot-update service for competition deployment.",
      zh: "实现了图像预处理、文本增强、经典回归与分类工作流，以及基于Flask的热更新服务用于竞赛部署。",
    },
    impact: {
      en: "This work supported a first-place national finish in the 15th Blue Bridge Cup AI track by combining reliable engineering with strong problem framing.",
      zh: "该工作通过将可靠工程与强大的问题框架相结合，支持团队在第15届蓝桥杯AI赛道中获得全国第一名。",
    },
    stack: [
      "OpenCV",
      "Scikit-learn",
      "Flask",
      "Python",
      "Data Augmentation",
      "Model Serving",
    ],
  },
];

export const timelineItems: TimelineItem[] = [
  {
    label: { en: "Southwest Jiaotong University", zh: "西南交通大学" },
    detail: {
      en: "M.Eng. track in Artificial Intelligence, joining the SCAI team for multimodal VLM and 6D pose estimation research.",
      zh: "人工智能方向硕士研究生，加入SCAI团队从事多模态视觉语言模型与6D姿态估计研究。",
    },
  },
  {
    label: { en: "Southwest Petroleum University", zh: "西南石油大学" },
    detail: {
      en: "B.Eng. in Computer Science and Technology with a GPA of 3.95 and sustained top performance across core technical courses.",
      zh: "计算机科学与技术学士，GPA 3.95，核心专业课程持续名列前茅。",
    },
  },
  {
    label: { en: "International Student Assistant", zh: "国际学生助理" },
    detail: {
      en: "Managed communication and coordination for 200+ international graduate and undergraduate students in fully English-speaking settings.",
      zh: "在纯英文环境中负责200+名国际研究生和本科生的沟通与协调工作。",
    },
  },
  {
    label: { en: "Youth League Committee Internship", zh: "团委实习" },
    detail: {
      en: "Recognized as an outstanding intern for cross-department coordination, communication discipline, and execution under pressure.",
      zh: "因跨部门协调、沟通规范和抗压执行能力被评为优秀实习生。",
    },
  },
];

export const awards: Bilingual[] = [
  {
    en: "Blue Bridge Cup AI Track — National First Prize, Rank #1",
    zh: "蓝桥杯AI赛道 — 全国一等奖，排名第一",
  },
  {
    en: "Provincial Second Prize in Blue Bridge Cup Software Competition",
    zh: "蓝桥杯软件竞赛省级二等奖",
  },
  {
    en: "Sichuan Outstanding Graduate",
    zh: "四川省优秀毕业生",
  },
  {
    en: "National Encouragement Scholarship and three First-Class University Scholarships",
    zh: "国家励志奖学金及三次校级一等奖学金",
  },
  {
    en: "Industrial Internet Platform Development Engineer Certificate",
    zh: "工业互联网平台开发工程师证书",
  },
];

export const contactLinks: LinkItem[] = [
  {
    label: { en: "Email", zh: "电子邮箱" },
    href: "mailto:dongyang0125@foxmail.com",
  },
  {
    label: { en: "CV", zh: "简历" },
    href: `${siteConfig.basePath}/assets/dongyang-wang-cv.pdf`,
  },
  { label: { en: "GitHub", zh: "GitHub" }, placeholder: true },
  { label: { en: "Google Scholar", zh: "谷歌学术" }, placeholder: true },
  { label: { en: "LinkedIn", zh: "LinkedIn" }, placeholder: true },
];

export const ui = {
  heroEyebrow: {
    en: "Research Portfolio — Academic Showcase",
    zh: "研究作品集 — 学术展示",
  },
  sectionTagResearch: { en: "Selected Research", zh: "重点研究" },
  sectionTagProjects: { en: "Technical Projects", zh: "技术项目" },
  sectionTagAbout: { en: "Profile / About", zh: "个人简介" },
  sectionTagHonors: { en: "Honors & Experience", zh: "荣誉与经历" },
  sectionTagContact: { en: "Contact / Links / CV", zh: "联系 / 链接 / 简历" },

  researchHeading: {
    en: "Research systems that bridge language, geometry, and visual understanding.",
    zh: "连接语言、几何与视觉理解的研究系统。",
  },
  researchIntro: {
    en: "My current work focuses on multimodal reasoning for object understanding, with an emphasis on robust 6D pose estimation under realistic scene conditions.",
    zh: "我目前的工作聚焦于面向物体理解的多模态推理，重点研究真实场景条件下的鲁棒6D姿态估计。",
  },
  researchFrame: { en: "Research Frame", zh: "研究框架" },
  researchMethod: { en: "Method", zh: "方法" },
  researchValidation: { en: "Validation", zh: "验证" },

  projectsHeading: {
    en: "Engineering work with measurable outcomes and deployable pipelines.",
    zh: "具有可衡量成果和可部署流水线的工程实践。",
  },
  projectsIntro: {
    en: "Beyond research, I build systems end to end: preprocessing, model training, optimization, deployment, and practical evaluation.",
    zh: "在科研之外，我端到端地构建系统：预处理、模型训练、优化、部署和实际评估。",
  },

  aboutHeading: {
    en: "A researcher with an engineering mindset and a clear communication style.",
    zh: "兼具工程思维与清晰沟通风格的研究者。",
  },
  aboutP1: {
    en: "I am currently preparing for graduate research in artificial intelligence, with a long-term focus on computer vision, multimodal modeling, and intelligent perception systems.",
    zh: "我目前正在攻读人工智能方向的研究生，长期专注于计算机视觉、多模态建模和智能感知系统。",
  },
  aboutP2: {
    en: "I enjoy turning difficult visual reasoning problems into structured pipelines, then validating them with careful experiments, reproducible implementation, and performance-aware engineering.",
    zh: "我乐于将困难的视觉推理问题转化为结构化的流水线，并通过严谨的实验、可复现的实现和性能感知的工程来验证它们。",
  },
  aboutP3: {
    en: "I am also comfortable collaborating in English, reading top-tier CV literature, and working across academic and applied contexts where clarity, speed, and reliability all matter.",
    zh: "我也习惯于用英语协作、阅读顶级计算机视觉文献，并在学术与应用交叉的环境中工作——清晰、速度和可靠性都至关重要。",
  },

  honorsHeading: {
    en: "A track record shaped by research discipline, competition results, and leadership.",
    zh: "由研究纪律、竞赛成果和领导力塑造的成长轨迹。",
  },
  highlights: { en: "Highlights", zh: "荣誉亮点" },

  contactHeading: {
    en: "Open to collaboration, research conversations, and technical opportunities.",
    zh: "开放合作、研究交流与技术机会。",
  },
  contactIntro: {
    en: "If you are building research around multimodal perception, pose estimation, or deployable vision systems, I would be glad to connect.",
    zh: "如果您正在围绕多模态感知、姿态估计或可部署视觉系统开展研究，我很乐意与您交流。",
  },

  viewResearch: { en: "View Research", zh: "查看研究" },
  downloadCV: { en: "Download CV", zh: "下载简历" },
  getInTouch: { en: "Get in Touch", zh: "取得联系" },
  availableSoon: { en: "Available Soon", zh: "即将上线" },
  downloadPDF: { en: "Download PDF", zh: "下载PDF" },

  heroLocation: { en: "Current Base", zh: "所在地" },
  heroAvailability: { en: "Availability", zh: "状态" },
  heroContact: { en: "Contact", zh: "联系方式" },

  backToTop: { en: "Back to top", zh: "回到顶部" },
  copyright: { en: "All rights reserved.", zh: "版权所有。" },
  footerNote: {
    en: "Built with intention — a research portfolio at the intersection of vision, language, and geometry.",
    zh: "用心构建——视觉、语言与几何交汇处的研究作品集。",
  },
};
