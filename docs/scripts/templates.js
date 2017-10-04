console.log('templates loaded')
Vue.component('inhouse-links',{
  template:`
  <div class='link-container inhouse'>
    <h3>Exercises and Articles from participants of the Workshop</h3>
    <ul>
      <link-item v-for='(linkData, index) in inhouseLinks'
      v-if='linkData.link != "NA"'
      v-bind:linkData=linkData
      v-bind:key=index>
      </link-item>
    </ul>
  </div>
  `,
  data: function(){return {inhouseLinks:inhouseLinks}}
})


Vue.component('external-links',{
  template:`
  <div class='link-container external'>
    <h3>Exercises and Articles from outside of the Workshop</h3>
    <ul>
      <link-item v-for='(linkData, index) in externalLinks'
      v-if='linkData.link != "NA"'
      v-bind:linkData=linkData
      v-bind:key=index>
      </link-item>
    </ul>
  </div>
  `,
  data: function(){return {externalLinks:externalLinks}}
})


Vue.component('link-item',{
  template:`
  <li class='link-item'>
    <h3>
      <a v-bind:href =linkData.link>
        {{linkData.title}}
      </a>
    </h3>
    <p v-html=linkData.description></p>
  </li>
  `,
  props: ['linkData']
})
