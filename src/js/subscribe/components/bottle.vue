<template>
    <div>

      {{ $route.params.hoge }}
      
      <router-link tag="label" to="/subscribe/frequency">Go to plan</router-link>

      <!-- これで次のページにパラメータを渡す -->
      <!-- 結果的に `/register?plan=private` になるクエリ-->
      <!-- <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link> -->


    </div>
</template>



