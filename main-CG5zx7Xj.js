(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createSVGElement = ([tag, attrs, children]) => {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.keys(attrs).forEach((name) => {
    element.setAttribute(name, String(attrs[name]));
  });
  if (children?.length) {
    children.forEach((child) => {
      const childElement = createSVGElement(child);
      element.appendChild(childElement);
    });
  }
  return element;
};
const createElement = (iconNode, customAttrs = {}) => {
  const tag = "svg";
  const attrs = {
    ...defaultAttributes,
    ...customAttrs
  };
  return createSVGElement([tag, attrs, iconNode]);
};
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
  attrs[attr.name] = attr.value;
  return attrs;
}, {});
const getClassNames = (attrs) => {
  if (typeof attrs === "string") return attrs;
  if (!attrs || !attrs.class) return "";
  if (attrs.class && typeof attrs.class === "string") {
    return attrs.class.split(" ");
  }
  if (attrs.class && Array.isArray(attrs.class)) {
    return attrs.class;
  }
  return "";
};
const combineClassNames = (arrayOfClassnames) => {
  const classNameArray = arrayOfClassnames.flatMap(getClassNames);
  return classNameArray.map((classItem) => classItem.trim()).filter(Boolean).filter((value, index, self) => self.indexOf(value) === index).join(" ");
};
const toPascalCase = (string) => string.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
const replaceElement = (element, { nameAttr, icons, attrs }) => {
  const iconName = element.getAttribute(nameAttr);
  if (iconName == null) return;
  const ComponentName = toPascalCase(iconName);
  const iconNode = icons[ComponentName];
  if (!iconNode) {
    return console.warn(
      `${element.outerHTML} icon name was not found in the provided icons object.`
    );
  }
  const elementAttrs = getAttrs(element);
  const iconAttrs = {
    ...defaultAttributes,
    "data-lucide": iconName,
    ...attrs,
    ...elementAttrs
  };
  const classNames = combineClassNames(["lucide", `lucide-${iconName}`, elementAttrs, attrs]);
  if (classNames) {
    Object.assign(iconAttrs, {
      class: classNames
    });
  }
  const svgElement = createElement(iconNode, iconAttrs);
  return element.parentNode?.replaceChild(svgElement, element);
};
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowRight = [
  ["path", { d: "M5 12h14" }],
  ["path", { d: "m12 5 7 7-7 7" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Award = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Briefcase = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Calculator = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }],
  ["path", { d: "M16 10h.01" }],
  ["path", { d: "M12 10h.01" }],
  ["path", { d: "M8 10h.01" }],
  ["path", { d: "M12 14h.01" }],
  ["path", { d: "M8 14h.01" }],
  ["path", { d: "M12 18h.01" }],
  ["path", { d: "M8 18h.01" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChartColumn = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M18 17V9" }],
  ["path", { d: "M13 17V5" }],
  ["path", { d: "M8 17v-3" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleCheck = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m9 12 2 2 4-4" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ClipboardCheck = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
  ["path", { d: "m9 14 2 2 4-4" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Download = [
  ["path", { d: "M12 15V3" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
  ["path", { d: "m7 10 5 5 5-5" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ExternalLink = [
  ["path", { d: "M15 3h6v6" }],
  ["path", { d: "M10 14 21 3" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FileText = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M10 9H8" }],
  ["path", { d: "M16 13H8" }],
  ["path", { d: "M16 17H8" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GraduationCap = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
    }
  ],
  ["path", { d: "M22 10v6" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HardHat = [
  ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }],
  ["path", { d: "M14 6a6 6 0 0 1 6 6v3" }],
  ["path", { d: "M4 15v-3a6 6 0 0 1 6-6" }],
  ["rect", { x: "2", y: "15", width: "20", height: "4", rx: "1" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mail = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Menu = [
  ["path", { d: "M4 5h16" }],
  ["path", { d: "M4 12h16" }],
  ["path", { d: "M4 19h16" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    }
  ]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Search = [
  ["path", { d: "m21 21-4.34-4.34" }],
  ["circle", { cx: "11", cy: "11", r: "8" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShieldCheck = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SquareCheckBig = [
  ["path", { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" }],
  ["path", { d: "m9 11 3 3L22 4" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TrendingUp = [
  ["path", { d: "M16 7h6v6" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Users = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
  ["circle", { cx: "9", cy: "7", r: "4" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = [
  ["path", { d: "M18 6 6 18" }],
  ["path", { d: "m6 6 12 12" }]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zap = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
    }
  ]
];
/**
 * @license lucide v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createIcons = ({
  icons = {},
  nameAttr = "data-lucide",
  attrs = {},
  root = document,
  inTemplates
} = {}) => {
  if (!Object.values(icons).length) {
    throw new Error(
      "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
    );
  }
  if (typeof root === "undefined") {
    throw new Error("`createIcons()` only works in a browser environment.");
  }
  const elementsToReplace = Array.from(root.querySelectorAll(`[${nameAttr}]`));
  elementsToReplace.forEach((element) => replaceElement(element, { nameAttr, icons, attrs }));
  if (inTemplates) {
    const templates = Array.from(root.querySelectorAll("template"));
    templates.forEach(
      (template) => createIcons({
        icons,
        nameAttr,
        attrs,
        root: template.content,
        inTemplates
      })
    );
  }
  if (nameAttr === "data-lucide") {
    const deprecatedElements = root.querySelectorAll("[icon-name]");
    if (deprecatedElements.length > 0) {
      console.warn(
        "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
      );
      Array.from(deprecatedElements).forEach(
        (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
      );
    }
  }
};
const navbarHTML = `
<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div class="container mx-auto px-4 h-20 flex items-center justify-between">
    <a href="/" class="flex items-center space-x-2">
      <span class="font-heading font-bold text-2xl tracking-tight text-primary">
        BNC<span class="text-foreground">CONSULTANTS</span>
      </span>
    </a>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center space-x-8">
      <a href="/" class="text-sm font-medium transition-colors hover:text-primary nav-link">Home</a>
      <a href="/about.html" class="text-sm font-medium transition-colors hover:text-primary nav-link">About Us</a>
      <a href="/services.html" class="text-sm font-medium transition-colors hover:text-primary nav-link">Services</a>
      <a href="/projects.html" class="text-sm font-medium transition-colors hover:text-primary nav-link">Projects</a>
      <a href="/careers.html" class="text-sm font-medium transition-colors hover:text-primary nav-link">Careers</a>
      <a href="/resources.html" class="text-sm font-medium transition-colors hover:text-primary nav-link">Resources</a>
      <a href="/contact.html">
        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
          Get a Quote
        </button>
      </a>
    </nav>

    <!-- Mobile Menu Button -->
    <button id="mobile-menu-btn" class="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9">
      <i data-lucide="menu" class="h-6 w-6"></i>
      <span class="sr-only">Toggle menu</span>
    </button>
  </div>

  <!-- Mobile Menu Sheet (Hidden by default) -->
  <div id="mobile-menu" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm hidden">
    <div class="fixed inset-y-0 right-0 z-50 h-full w-3/4 gap-4 border-l bg-background p-6 shadow-lg transition ease-in-out sm:max-w-sm">
      <div class="flex flex-col space-y-2 text-center sm:text-left">
        <h2 class="text-lg font-semibold text-foreground">Menu</h2>
        <button id="close-menu-btn" class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <i data-lucide="x" class="h-4 w-4"></i>
            <span class="sr-only">Close</span>
        </button>
      </div>
      <div class="flex flex-col space-y-6 mt-8">
        <a href="/" class="text-lg font-medium transition-colors hover:text-primary">Home</a>
        <a href="/about.html" class="text-lg font-medium transition-colors hover:text-primary">About Us</a>
        <a href="/services.html" class="text-lg font-medium transition-colors hover:text-primary">Services</a>
        <a href="/projects.html" class="text-lg font-medium transition-colors hover:text-primary">Projects</a>
        <a href="/careers.html" class="text-lg font-medium transition-colors hover:text-primary">Careers</a>
        <a href="/resources.html" class="text-lg font-medium transition-colors hover:text-primary">Resources</a>
        <a href="/contact.html">
          <button class="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2">
            Get a Quote
          </button>
        </a>
      </div>
    </div>
  </div>
</header>
`;
const footerHTML = `
<footer class="bg-slate-900 text-slate-200 py-12 border-t border-slate-800">
  <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h3 class="font-heading font-bold text-xl text-white mb-4">
        BNC CONSULTANTS
      </h3>
      <p class="text-sm text-slate-400 mb-4">
        Professional Quantity Surveying and Cost Management services for the built environment. Accuracy, Integrity, Transparency.
      </p>
    </div>

    <div>
      <h4 class="font-heading font-semibold text-white mb-4">Quick Links</h4>
      <ul class="space-y-2 text-sm">
        <li><a href="/about.html" class="hover:text-white transition-colors">About Us</a></li>
        <li><a href="/services.html" class="hover:text-white transition-colors">Services</a></li>
        <li><a href="/projects.html" class="hover:text-white transition-colors">Projects</a></li>
        <li><a href="/careers.html" class="hover:text-white transition-colors">Careers</a></li>
      </ul>
    </div>

    <div>
      <h4 class="font-heading font-semibold text-white mb-4">Services</h4>
      <ul class="space-y-2 text-sm">
        <li>Cost Estimation</li>
        <li>Bills of Quantities</li>
        <li>Tender Documentation</li>
        <li>Project Cost Control</li>
      </ul>
    </div>

    <div>
      <h4 class="font-heading font-semibold text-white mb-4">Contact Us</h4>
      <ul class="space-y-3 text-sm">
        <li class="flex items-start space-x-3">
          <i data-lucide="map-pin" class="h-5 w-5 text-primary shrink-0"></i>
          <span>123 Construction Plaza, Westlands<br />Nairobi, Kenya</span>
        </li>
        <li class="flex items-center space-x-3">
          <i data-lucide="phone" class="h-5 w-5 text-primary shrink-0"></i>
          <span>+254 700 000 000</span>
        </li>
        <li class="flex items-center space-x-3">
          <i data-lucide="mail" class="h-5 w-5 text-primary shrink-0"></i>
          <span>info@bncconsultants.com</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
    &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} BNC Consultants Limited. All rights reserved.
  </div>
</footer>
`;
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) navbarContainer.innerHTML = navbarHTML;
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) footerContainer.innerHTML = footerHTML;
  createIcons({
    icons: {
      Menu,
      X,
      Phone,
      Mail,
      MapPin,
      Calculator,
      FileText,
      BarChart3: ChartColumn,
      HardHat,
      ArrowRight,
      CheckCircle2: CircleCheck,
      Users,
      Award,
      Briefcase,
      GraduationCap,
      Download,
      ExternalLink,
      ClipboardCheck,
      TrendingUp,
      Search,
      Zap,
      ShieldCheck,
      CheckSquare: SquareCheckBig
    }
  });
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });
    closeMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  }
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || currentPath === "/" && href === "/index.html" || currentPath.endsWith("/") && href === "/") {
      link.classList.add("text-primary", "font-semibold");
      link.classList.remove("text-muted-foreground");
    } else {
      link.classList.add("text-muted-foreground");
    }
  });
});
