<div>
  <Summary
    v-for='(post, index) in publishedPosts'
    :key='index'
    :data='post'
  />
</div>
