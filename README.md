## kbotdocs

KBotDocs 작성 방법

<hr>

### 1. 편 만들기

`main` 내에 아래와 같이 작성합니다:
```HTML
<section id="{sectionId}">
   
</section>
```

그리고 `aside div#list-box` 내에 아래와 같이 작성합니다:
```HTML
<ul class="list" id="{sectionId}"><h3 class="list-title">{sectionName}</h3>
  
</ul>
```


### 2. 내용 작성

`section#{sectionId}` 내에 다음과 같이 작성합니다:
```HTML
<div class="con" id="dd{contentId}">
  <h2 class="title">{contentName}</h2>
  <article>
  </article>
  <article>
  </article>
  ...
  <article>
  </article>
</div>
```
세부적인 내용은 `article` 내에 작성합니다. `contentId`은 `0-0`과 같은 형식입니다.

그리고 `aside div#list-box ul.list#{sectionId}` 내에 다음과 같이 작성합니다:
```HTML
<li class="list-el" id="d{contentId1}">{contentName1}</li>
<li class="list-el" id="d{contentId2}">{contentName2}</li>
...
<li class="list-el" id="d{contentIdN}">{contentNameN}</li>
```


> #### 2-1 문장 작성
>
