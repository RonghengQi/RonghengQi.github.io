import { CV_URL } from "./data.js";

// Chinese content is kept separate from the English source data so the two
// versions can be edited independently without duplicating the page layout.
export const zh = {
  profile: {
    role: ["风险与减灾研究型硕士生", "伦敦大学学院"],
    location: "英国伦敦",
    links: ["邮箱", "LinkedIn", "GitHub", "简历（PDF）"],
  },

  sections: {
    about: "个人简介",
    education: "教育经历",
    manuscripts: "论文手稿",
    patents: "专利",
    workingPapers: "工作论文",
    experience: "科研经历",
    workExperience: "工作经历",
    projects: "项目经历",
    awards: "奖项",
    teaching: "教学经历",
    skills: "技能",
  },

  about: [
    `我目前在<a href="https://www.ucl.ac.uk/risk-disaster-reduction/">伦敦大学学院</a>攻读<strong>风险与减灾研究型硕士</strong>，导师为<a href="https://profiles.ucl.ac.uk/89003-saman-ghaffarian">Saman Ghaffarian</a>教授和<a href="https://profiles.ucl.ac.uk/90166-mark-pelling/publications">Mark Pelling</a>教授。我此前在<a href="https://en.cug.edu.cn/">中国地质大学（武汉）</a>获得应急管理专业管理学学士学位，本科导师为<a href="https://grzy.cug.edu.cn/ruanbanxiao/zh_CN/index.htm">阮班晓</a>教授和<a href="https://grzy.cug.edu.cn/lishixiang/zh_CN/index.htm">李世祥</a>教授。`,
    `我的研究聚焦灾害风险降低、应急响应、地理空间分析与 GeoAI。我结合遥感、GIS、机器学习和可解释人工智能，研究城市洪涝、灾后建筑损毁、紧急医疗服务可达性及城市韧性。`,
    `我致力于构建可解释的建筑尺度证据，为公平的风险管理与应急规划提供支持。欢迎通过<a href="mailto:rongheng.qi.25@ucl.ac.uk">电子邮件</a>与我联系，或<a href="${CV_URL}" target="_blank" rel="noopener noreferrer">在此查看我的简历</a>。`,
  ],

  education: [
    {
      org: "伦敦大学学院",
      desc: "风险与减灾研究型硕士 · 成绩：70.70/100（优等）",
      role: "英国伦敦",
      date: "2025年9月—2026年12月（预计）",
    },
    {
      org: "中国地质大学（武汉）",
      desc: "应急管理专业管理学学士 · 成绩：90.31/100",
      role: "中国武汉",
      date: "2021年9月—2025年6月",
    },
  ],

  manuscripts: [
    {
      title:
        "特大城市内涝情景下脆弱学校的紧急医疗服务可达性：以中国中部武汉市为例",
      authors:
        "<strong>Rongheng Qi</strong>, Banxiao Ruan<sup>*</sup>, Zeyu Xie, Jingyi Xu, Shixiang Li, and Wei Mei",
      venue: "<em>International Journal of Health Geographics</em>",
      note: "<sup>*</sup> 通讯作者",
    },
  ],

  patents: [
    {
      org: "多功能户外帐篷",
      desc: "中国实用新型专利，CN 221990046U",
      role: "Xie, Z., Xu, J., & <strong>Qi, R.</strong>",
      date: "2024年",
      links: ["专利"],
    },
    {
      org: "防倾倒底座及道路警示柱",
      desc: "中国实用新型专利，CN 221919100U",
      role: "Xu, J., Xie, Z., & <strong>Qi, R.</strong>",
      date: "2024年",
      links: ["专利"],
    },
  ],

  experience: [
    {
      org: "建筑尺度洪涝风险评估",
      desc: "融合城市洪涝易发性、建筑暴露度与脆弱性，结合多源遥感、城市数据和深度学习，对超过12万栋建筑开展风险评估。",
      role: "硕士学位论文 · 导师：Saman Ghaffarian 教授 · 伦敦大学学院",
      date: "2026年4月—至今",
    },
    {
      org: "可解释的灾后建筑损毁分类",
      desc: "基于 xBD 数据集，采用 MobileNetV3 主干网络改进 DeepLabV3+，并比较 Grad-CAM、HiRes-CAM、Integrated Gradients 和 Attention-Aware Layer-Wise Relevance Propagation 等解释方法。",
      role: "研究助理 · 导师：Saman Ghaffarian 教授 · 伦敦大学学院",
      date: "2026年3月—至今",
    },
    {
      org: "城市内涝与紧急医疗服务可达性",
      desc: "构建随机降雨与水文模拟框架，并采用概率增强型两步移动搜索法，评估武汉市学校在15分钟出行范围内的医院可达性。",
      role: "本科毕业论文 · 导师：阮班晓教授 · 中国地质大学（武汉）",
      date: "2024年6月—2025年6月",
    },
    {
      org: "长江经济带城市韧性",
      desc: "运用时变熵权法、不平等分解和空间自相关分析，对110个城市的社会—生态韧性进行评估。",
      role: "研究助理 · 导师：阮班晓教授、李世祥教授 · 中国地质大学（武汉）",
      date: "2023年5月—2025年1月",
    },
    {
      org: "疫情后复工复产政策分析",
      desc: "对中国7个主要城市超过10万字的经济、交通和公共卫生政策文件进行结构化整理与分类。",
      role: "研究助理 · 导师：赵鹏军教授、刘启扬教授 · 北京大学深圳研究生院",
      date: "2022年7月—2022年9月",
    },
  ],

  workExperience: [
    {
      org: "航天宏图信息技术股份有限公司",
      desc: "为湖北省4个城市开展多灾种风险评估，制作20余幅标准化区划图，并参与完成8项正式灾害治理成果。",
      role: "灾害分析实习生 · 应急管理部门 · 中国武汉",
      date: "2024年12月—2025年2月",
    },
    {
      org: "巴东县自然资源和规划局",
      desc: "利用无人机和 GPS 数据参与活动滑坡野外调查，并处理 Sentinel-2 与 Landsat-8 影像，用于植被、水体和地形分析。",
      role: "地理空间分析实习生 · 灾害防治部门 · 中国恩施",
      date: "2023年7月—2023年8月",
    },
  ],

  projects: [],

  awards: [
    { org: "RDR硕士最佳论文海报奖", date: "2026年" },
    { org: "中国地质大学优秀学生干部", date: "2024年" },
    { org: "暑期社会实践活动省级优秀团队", date: "2024年" },
    { org: "2023年高等教育国际数学建模竞赛决赛入围奖", date: "2023年" },
    { org: "中国地质大学青年志愿服务项目大赛一等奖", date: "2023年" },
  ],

  teaching: [],

  skills: [
    {
      org: "地理空间与数据工具",
      desc: "Python · ArcGIS Pro · Google Earth Engine · RStudio · SPSS · Overleaf",
    },
    {
      org: "语言能力",
      desc: "中文（母语） · 英语（流利，雅思7.0：听力7.0 / 阅读7.0 / 写作6.5 / 口语6.5）",
    },
  ],

  ui: {
    darkMode: "深色模式",
    lightMode: "浅色模式",
    lastUpdated: "最后更新：2026年8月",
  },
};
