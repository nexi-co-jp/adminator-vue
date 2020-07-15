<template>
    <div class="peers ai-s fxw-nw h-100vh">
        <div
            class="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv"
            style="background-image:url(images/bg.jpg)"
        >
            <div class="pos-a centerXY">
                <div
                    class="bgc-white bdrs-50p pos-r"
                    style="width:120px;height:120px"
                >
                    <img
                        class="pos-a centerXY"
                        src="assets/static/images/logo.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div
            class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r ps"
            style="min-width:320px"
        >
            <h4 class="fw-300 c-grey-900 mB-40">Register</h4>
            <form>
                <div class="form-group">
                    <label class="text-normal text-dark">Username</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="John Doe"
                    />
                </div>
                <div class="form-group">
                    <label class="text-normal text-dark">Email Address</label>
                    <input
                        type="email"
                        class="form-control"
                        placeholder="name@email.com"
                    />
                </div>
                <div class="form-group">
                    <label class="text-normal text-dark">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                    />
                </div>
                <div class="form-group">
                    <label class="text-normal text-dark">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                    />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Register</button>
                </div>
            </form>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                <div
                    class="ps__thumb-x"
                    tabindex="0"
                    style="left: 0px; width: 0px;"
                ></div>
            </div>
            <div class="ps__rail-y" style="top: 0px; right: 0px;">
                <div
                    class="ps__thumb-y"
                    tabindex="0"
                    style="top: 0px; height: 0px;"
                ></div>
            </div>
        </div>
    </div>
</template>
