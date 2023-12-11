<template>
    <div class="about_me flex">
        <div class="moon">
            <span class="figure figure01"></span>
            <span class="figure figure02"></span>
        </div>
        <div class="playlist">
            <h4>Moon & Melody</h4>
            <p>달이 15일마다 보름달로 찾아오듯이, 주어진 시간과 기회마다 최선을 다해 빛나고 성장하는 김규빈입니다. 저는 달처럼 변화하는 UI 트렌드에 민감하게 대응하면서도, 사용자 경험을 항상 중요하게
                생각합니다. UI 개발은 단순히 디자인을 구현하는 것을 넘어서, 사용자의 니즈와 목적을 파악하며 직관적이고 효과적인 인터페이스를 구현하는 것을 의미합니다. 저의 개발 프로세스는 달이 차분한 빛과
                함께하는 것처럼, 신중한 계획과 디테일한 디자인을 바탕으로 사용자가 편안하게 상호작용할 수 있는 환경을 만들어냅니다.

                또한 달은 어둠을 밝히는데 필요한 광원입니다. 저도 마찬가지로 UI 개발에서는 문제를 해결하고 혁신적인 솔루션을 제시하여 프로젝트의 성공을 위한 밝은 길을 제시합니다. 저의 다양한 프로젝트
                경험과 기술적인 능력을 통해 어떤 어려움이든 극복하고, 더 나은 사용자 경험을 위한 동료들과의 협력을 즐깁니다.</p>
            <ul>
                <ol><a href="">portfolio</a></ol>
                <ol><a href="">Logos</a></ol>
                <ol><a href="">Popups</a></ol>
            </ul>
        </div>

        <div class="cd_wrapper">
            <div class="cd-container">
                <div class="cd" :style="{ animationDuration: speed + 's' }"></div>
            </div>
            <label for="speed">속도 조절: </label>
            <input type="range" id="speed" v-model="speed" min="1" max="10">
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    data: {
        speed: 5, // 초기 속도
    },
    computed: {
        cdRotationStyle() {
            return {
                transform: 'rotate(' + this.calculateRotation() + 'deg)',
            };
        },
    },
    methods: {
        calculateRotation() {
            const duration = 10; // 애니메이션 한 바퀴를 완료하는데 걸리는 시간 (초)
            const totalRotation = 360; // 총 회전 각도 (한 바퀴)
            const rotationPerSecond = totalRotation / duration;
            return this.speed * rotationPerSecond;
        },
    },
};

</script>

