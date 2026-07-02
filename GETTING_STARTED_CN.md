# Rongheng Qi 个人学术主页维护指南

这个目录已经基于 `academicpages/academicpages.github.io` 模板整理成个人学术主页骨架，并配置为发布到：

```text
https://ronghengqi.github.io
```

## 已配置的信息

- GitHub 仓库：`RonghengQi/RonghengQi.github.io`
- 姓名：`Rongheng Qi`
- 邮箱：`ronghengqi03@gmail.com`
- 研究方向：GeoAI、remote sensing、flood susceptibility、disaster risk、urban analytics

## 后续主要修改位置

1. `_config.yml`
   - 站点标题、作者侧边栏、邮箱、GitHub、Google Scholar、ORCID、LinkedIn 等。

2. `_pages/about.md`
   - 首页简介、研究兴趣、新闻、代表性工作和联系方式。

3. `_pages/research.md`
   - 研究主题、当前项目、方法和工具。

4. `_pages/cv.md`
   - Markdown 版本 CV。

5. `_publications/`
   - 每篇论文一个 `.md` 文件。复制现有模板文件后修改题目、作者、期刊/会议、日期、DOI、PDF 链接等。

6. `_portfolio/`
   - 研究项目、代码、数据集、Web app 或课程项目。

7. `_talks/` 和 `_teaching/`
   - 分别放学术报告、会议展示、助教/教学经历。

8. `images/profile.png`
   - 替换成你的个人头像，文件名保持 `profile.png` 最简单。

## 本地预览

如果本机装了 Ruby/Bundler，可以运行：

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

然后访问：

```text
http://localhost:4000
```
