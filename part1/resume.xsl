<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">


  <xsl:template match="resume">
    <html xmls="http://www.w3.org/1999/xhtml">

      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <title>Resume</title>
      </head>


      <body>
        <header>
          <h1 class="name">
            <xsl:value-of select="name" />
          </h1>

          <div class="contact-info">
            <xsl:apply-templates select="contact-info" />
          </div>
        </header>

        <main>

          <section class="section general-info">
            <xsl:apply-templates select="general-info" />
          </section>

          <section class="section education">
            <xsl:apply-templates select="education" />
          </section>

          <section class="section work-exp">
            <xsl:apply-templates select="work-exp" />
          </section>
        </main>


      </body>
    </html>


  </xsl:template>


  <xsl:template match="contact-info">
    <span class="contact-info-item">
      <xsl:value-of select="phone" />
    </span>
    <span class="contact-info-item">
      <xsl:value-of select="email" />
    </span>
  </xsl:template>

  <xsl:template match="general-info">
    <h2 class="section-header">General Info</h2>

    <h3>Languages</h3>
    <ul>
      <xsl:for-each select="languages/language">
        <li>
          <xsl:value-of select="current()" />
        </li>
      </xsl:for-each>
    </ul>

    <h3>Hobbies</h3>
    <ul>
      <xsl:for-each select="hobbies/hobby">
        <li>
          <xsl:value-of select="current()" />
        </li>
      </xsl:for-each>
    </ul>

    <h3>Awards</h3>
    <ul>
      <xsl:for-each select="awards/award">
        <li>
          <xsl:value-of select="current()" />
        </li>
      </xsl:for-each>
    </ul>

    <h3>Liscense</h3>
    <ul>
      <li>
        <xsl:value-of select="liscense" />
      </li>
    </ul>


  </xsl:template>

  <xsl:template match="education">
    <h2 class="section-header">Education</h2>
    <xsl:for-each select="school">
      <div class="school">
        <div class="name">
          <xsl:value-of select="name" />
        </div>

        <div class="block">
          <span class="degree">
            <xsl:value-of select="degree" />
          </span>
          <span class="grad-year">
            Class of
            <xsl:value-of select="grad-year" />
          </span>
        </div>

        <xsl:if test="gpa/@show='true'">
          <div class="gpa">
            GPA:
            <xsl:value-of select="gpa" />
          </div>
        </xsl:if>
      </div>
    </xsl:for-each>
  </xsl:template>

  <xsl:template match="work-exp">
    <h2 class="section-header">Work Experience</h2>

    <xsl:for-each select="job">
      <div class="job">
        <div class="company">
          <xsl:value-of select="company" />
        </div>
        <div class="block">
          <span class="title">
            <xsl:value-of select="title" />
          </span>
          <span class="duration">
            <xsl:value-of select="duration/start" />
            -
            <xsl:value-of select="duration/end" />
          </span>
        </div>

        <ul class="desc">
          <xsl:for-each select="desc/pt">
            <li>
              <xsl:value-of select="." />
            </li>
          </xsl:for-each>
        </ul>
      </div>
    </xsl:for-each>
  </xsl:template>


</xsl:stylesheet>