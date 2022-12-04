<template>
  <Container>
    <header class="flex py-3 items-center justify-between border-b sticky top-0 bg-white z-10" >
      <h1 class="text-2xl font-bold text-gray-600">This Love</h1>
      <RouterLink to="/songs" class="text-gray-600 text-xs">
        Back to Playlist
      </RouterLink>
    </header>

    <div class="mt-4 flex gap-6 details relative">
      <div class="sticky top-0" >
        <img
          src="https://i0.wp.com/www.globalgranary.life/wp-content/uploads/2018/06/Zhao-Lu-Si.jpeg?ssl=1"
          alt="Song Poster"
          class="w-64 h-64 object-cover"
        />
      </div>
      <section>
        <h1 class="text-2xl text-gray-600 font-bold font-mono">This Love</h1>
        <h3 class="text-gray-400">Punch</h3>
        <span>3:40</span>
        <div class="mt-6">
          <h2 class="text-2xl font-serif underline text-black">Lyric</h2>
          <pre>
I was so high, I did not recognize
The fire burning in her eyes
The chaos that controlled my mind
Whispered goodbye as she got on a plane
Never to return again but always in my heart, oh
This love has taken its toll on me
She said goodbye too many times before
And her heart is breakin' in front of me
And I have no choice
'Cause I won't say goodbye anymore
Whoa
Whoa
Whoa
I tried my best to feed her appetite
Keep her coming every night
So hard to keep her satisfied, oh
Kept playing love like it was just a game
Pretending to feel the same
Then turn around and leave again, but uh-oh
This love has taken its toll on me
She said goodbye too many times before
And her heart is breakin' in front of me
And I have no choice
'Cause I won't say goodbye anymore
Whoa
Whoa
Whoa
I'll fix these broken things, repair your broken wings
And make sure everything's all right (it's all right, it's all right)
My pressure on your hips, I'm sinking my fingertips
Every inch of you
Because I know that's what you want me to do
This love has taken its toll on me
She said goodbye too many times before
Her heart is breakin' in front of me
And I have no choice
'Cause I won't say goodbye anymore
This love has taken its toll on me
She said goodbye too many times before
And my heart is breakin' in front of me
And she said goodbye too many times before
This love has taken its toll on me
She said goodbye too many times before
And her heart is breakin' in front of me
And I have no choice
'Cause I won't say goodbye anymore
            </pre
          >
        </div>
      </section>
    </div>
  </Container>
</template>

<script setup>
import Container from "../components/layout/Container.vue";
</script>

<style lang="scss" scoped>

</style>
