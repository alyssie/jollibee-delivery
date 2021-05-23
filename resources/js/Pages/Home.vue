<template>
    <layout-guest>
        <div class="grid grid-cols-2 gap-0">
            <div>
                <h1>Today's Menu</h1>
            </div>
            <div>
                <form>
                    <input type="text" class="w-full" placeholder="Search">
                    <button>Submit</button>
                </form>
            </div>
        </div>
        <div class="w-full">
            <img src="http://placekitten.com/g/900/150" alt="Banner" class="w-full">
        </div>
        <div class="mt-12">
            <h2>Menu Category</h2>
        </div>
        <div class="grid grid-cols-6 gap-6">
            <div>
                <img src="http://placekitten.com/g/100/130" alt="Banner" class="w-full">
            </div>
            <div>
                <img src="http://placekitten.com/g/100/130" alt="Banner" class="w-full">
            </div>
            <div>
                <img src="http://placekitten.com/g/100/130" alt="Banner" class="w-full">
            </div>
            <div>
                <img src="http://placekitten.com/g/100/130" alt="Banner" class="w-full">
            </div>
            <div>
                <img src="http://placekitten.com/g/100/130" alt="Banner" class="w-full">
            </div>
            <div>
                <img src="http://placekitten.com/g/100/130" alt="Banner" class="w-full">
            </div>
        </div>
    </layout-guest>
</template>


<script>
import LayoutGuest from '@/Layouts/Guest'
import Input from '@/Components/Input.vue';

export default {
    components: {
        LayoutGuest,
        Input,
    }
};
</script>
