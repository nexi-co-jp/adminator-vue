<template>
    <div class="email-app">
        <div class="email-side-nav remain-height ov-h">
            <div class="h-100 layers">
                <div class="p-20 bgc-grey-100 layer w-100">
                    <a href="/compose" class="btn btn-danger btn-block">
                        New Message
                    </a>
                </div>
                <div class="scrollable pos-r bdT layer w-100 fxg-1 ps">
                    <ul class="p-20 nav flex-column">
                        <li class="nav-item">
                            <a
                                href="javascript:void(0)"
                                class="nav-link c-grey-800 cH-blue-500 active"
                            >
                                <div class="peers ai-c jc-sb">
                                    <div class="peer peer-greed">
                                        <i class="mR-10 ti-email"></i>
                                        <span>Inbox</span>
                                    </div>
                                    <div class="peer">
                                        <span
                                            class="badge badge-pill bgc-deep-purple-50 c-deep-purple-700"
                                        >
                                            +99
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link c-grey-800 cH-blue-500">
                                <div class="peers ai-c jc-sb">
                                    <div class="peer peer-greed">
                                        <i class="mR-10 ti-share"></i>
                                        <span>Sent</span>
                                    </div>
                                    <div class="peer">
                                        <span
                                            class="badge badge-pill bgc-green-50 c-green-700"
                                        >
                                            12
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link c-grey-800 cH-blue-500">
                                <div class="peers ai-c jc-sb">
                                    <div class="peer peer-greed">
                                        <i class="mR-10 ti-star"></i>
                                        <span>Important</span>
                                    </div>
                                    <div class="peer">
                                        <span
                                            class="badge badge-pill bgc-blue-50 c-blue-700"
                                        >
                                            3
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link c-grey-800 cH-blue-500">
                                <div class="peers ai-c jc-sb">
                                    <div class="peer peer-greed">
                                        <i class="mR-10 ti-file"></i>
                                        <span>Drafts</span>
                                    </div>
                                    <div class="peer">
                                        <span
                                            class="badge badge-pill bgc-amber-50 c-amber-700"
                                        >
                                            5
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link c-grey-800 cH-blue-500">
                                <div class="peers ai-c jc-sb">
                                    <div class="peer peer-greed">
                                        <i class="mR-10 ti-alert"></i>
                                        <span>Spam</span>
                                    </div>
                                    <div class="peer">
                                        <span
                                            class="badge badge-pill bgc-red-50 c-red-700"
                                        >
                                            1
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link c-grey-800 cH-blue-500">
                                <div class="peers ai-c jc-sb">
                                    <div class="peer peer-greed">
                                        <i class="mR-10 ti-trash"></i>
                                        <span>Trash</span>
                                    </div>
                                    <div class="peer">
                                        <span
                                            class="badge badge-pill bgc-red-50 c-red-700"
                                        >
                                            +99
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
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
        </div>
        <div
            class="email-wrapper row remain-height pos-r scrollable bgc-white ps"
        >
            <div class="email-content open no-inbox-view">
                <div class="email-compose">
                    <div class="d-n@md+ p-20">
                        <a
                            class="email-side-toggle c-grey-900 cH-blue-500 td-n"
                            href="javascript:void(0)"
                        >
                            <i class="ti-menu"></i>
                        </a>
                    </div>
                    <form class="email-compose-body">
                        <h4 class="c-grey-900 mB-20">Send Message</h4>
                        <div class="send-header">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="To"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="CC"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    class="form-control"
                                    placeholder="Email Subject"
                                />
                            </div>
                            <div class="form-group">
                                <textarea
                                    name="compose"
                                    class="form-control"
                                    placeholder="Say Hi..."
                                    rows="10"
                                ></textarea>
                            </div>
                        </div>
                        <div id="compose-area"></div>
                        <div class="text-right mrg-top-30">
                            <button class="btn btn-danger">Send</button>
                        </div>
                    </form>
                </div>
            </div>
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
