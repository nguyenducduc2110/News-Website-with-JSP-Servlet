⚠️️️ **CKEditor 4 (the open source edition) is no longer maintained.** ⚠️

If you would like to keep access to future CKEditor 4 security patches, check the [Extended Support Model](https:

## CKEditor 4.24.0-lts

⚠️️️ Please note that this release is a part of [CKEditor 4 Extended Support Model](https:

**Security Updates:**

* Fixed cross-site scripting (XSS) vulnerability caused by incorrect CDATA detection reported by [Michal Frýba](https:

	Issue summary: The vulnerability allowed to inject malformed HTML content bypassing Advanced Content Filtering mechanism, which could result in executing JavaScript code. See [GHA](https:

* Fixed cross-site scripting (XSS) vulnerability in AJAX sample reported by Rafael Pedrero, see [INCIBE](https:

	Issue summary: The vulnerability allowed to execute JavaScript code by abusing the AJAX sample. See [GHA](https:

* Cross-site scripting (XSS) vulnerability in samples with enabled the preview feature reported by Marcin Wyczechowski & Michał Majchrowicz, AFINE Team.

	Issue summary: The vulnerability allowed to execute JavaScript code by abusing the misconfigured preview feature. See [GHA](https:

You can read more details in the relevant security advisories. [Contact us](security@cksource.com) if you have more questions.

**An upgrade is highly recommended!**

Fixed Issues:

* Fixed: The CDATA parsing mechanism incorrectly detects the end of CDATA content. This fix unifies how style and script elements are parsed with the browser's behavior.

## CKEditor 4.23.0-lts

This release introduces the LTS (”Long Term Support”) version of the editor, available under commercial terms (["Extended Support Model"](https:

If you acquired the Extended Support Model for CKEditor 4 LTS, please read [the CKEditor 4 LTS key activation guide.](https:

## CKEditor 4.22.0 / 4.22.1

⚠️ This is the last open source release of CKEditor 4. As announced in 2018, CKEditor 4 has reached its End of Life in June 2023.


New Features:

* [#5316](https:
* [#5410](https:
* [#5510](https:

Fixed Issues:

* [#5437](https:
* [#5495](https:

Other Changes:

* [#5412](https:

Note: CKEditor 4.22.1 has been released immediately after 4.22.0 to fix the README issues on [npm](https:

## CKEditor 4.21.0

**Security Updates:**

A cross-site scripting vulnerability has been discovered affecting [Iframe Dialog](https:

This vulnerability might affect a small percentage of integrators that depend on dynamic editor initialization/destroy mechanism. See [GitHub advisory](https:

**Potential breaking changes**

In some rare cases, a security release may introduce a breaking change to your application. We have provided configuration options that will help you mitigate any potential issues with the upgrade:

- Starting from version 4.21, the [Iframe Dialog](https:
- Starting from version 4.21, the [Media Embed](https:

If you choose to change either of the above options, make sure to properly configure [Content Security Policy](https:

You can read more details in the relevant security advisory and [contact us](security@cksource.com) if you have more questions.

**An upgrade is highly recommended!**

New Features:

* [#4400](https:

Fixed Issues:

* [#5431](https:

## CKEditor 4.20.2

Fixed Issues:

* [#439](https:
* [#4829](https:
* [#5396](https:
* [#5414](https:
* [#698](https:

API changes:

* [#3540](https:
* [#5352](https:

## CKEditor 4.20.1

Fixed Issues:

* [#5333](https:
* [#2881](https:
* [#2996](https:
* [#4802](https:
* [#5365](https:
* [#5305](https:

## CKEditor 4.20

New Features:

* [#5084](https:
* [#5219](https:
* [#2008](https:
	* [`configDefinition.followingSpace`](https:
	* [`config.emoji_followingSpace`](https:
* [#5215](https:

Fixed Issues:

* [#4889](https:
* [#5319](https:
* [#4941](https:
* [#4931](https:


API changes:

* [#5122](https:
* [#2008](https:

## CKEditor 4.19.1

Fixed Issues:

* [#5125](https:
* [#5135](https:
* [#5085](https:
* [#4284](https:
* [#5184](https:
* [#5158](https:
* [#5234](https:
* [#438](https:
* [#4449](https:
* [#4473](https:
	* [`functions`](https:
	* [`equals`](https:
	* [`notEqual`](https:
	* [`cssLength`](https:
	* [`htmlLength`](https:
	* [`inlineStyle`](https:
* [#5147](https:
* [#5144](https:
* [#5022](https:

API changes:

* [#5184](https:
* [#5184](https:

## CKEditor 4.19.0

New features:

* [#2444](https:
* [#4641](https:
* [#4986](https:
* [#2445](https:

Fixed Issues:

* [#4543](https:
* [#4052](https:
* [#1904](https:
* [#4904](https:
* [#3394](https:
* [#5049](https:
* [#5095](https:
* [#4855](https:

API changes:

* [#4641](https:
* [#5095](https:
* [#2445](https:

## CKEditor 4.18.0

**Security Updates:**

* Fixed an XSS vulnerability in the core module reported by GitHub Security Lab team member [Kevin Backhouse](https:

	Issue summary: The vulnerability allowed to inject malformed HTML bypassing content sanitization, which could result in executing a JavaScript code. See [CVE-2022-24728](https:

* Fixed a Regular expression Denial of Service (ReDoS) vulnerability in dialog plugin discovered by the CKEditor 4 team during our regular security audit.

	Issue summary: The vulnerability allowed to abuse a dialog input validator regular expression, which could cause a significant performance drop resulting in a browser tab freeze. See [CVE-2022-24729](https:

You can read more details in the relevant security advisory and [contact us](security@cksource.com) if you have more questions.

**An upgrade is highly recommended!**

**Highlights:**

[Web Spell Checker](https:

We strongly encourage everyone to choose one of the other available spellchecking solutions - [Spell Check As You Type (SCAYT)](https:

Fixed issues:

* [#5097](https:
* [#5044](https:

Other changes:

* [#5093](https:
* [#5127](https:
* [#5087](https:
* [#5128](https:

## CKEditor 4.17.2

Fixed issues:

* [#4934](https:
* [#547](https:
* [#4875](https:
* [#4873](https:
* [#4952](https:
* [#4761](https:
* [#4987](https:
* [#5061](https:
* [#5004](https:
* [#4994](https:

API changes:

* [#4918](https:
* [#4761](https:
* [#4761](https:

Other changes:

* [#5014](https:

## CKEditor 4.17.1

**Highlights:**

Due to a regression in CKEeditor 4.17.0 version that was only revealed after the release and affected a limited area of operation, CSS assets loaded via relative links started to point into invalid location when loaded from external resources.

We have therefore decided to immediately release CKEditor 4.17.1 that fixed this problem. If you have already upgraded to v4.17.0, make sure to upgrade to v4.17.1 to avoid this regression.

Fixed issues:

* [#4979](https:

## CKEditor 4.17

**Security Updates:**

* Fixed XSS vulnerability in the core module reported by [William Bowling](https:

	Issue summary: The vulnerability allowed to inject malformed comments HTML bypassing content sanitization, which could result in executing JavaScript code. See [CVE-2021-41165](https:

* Fixed XSS vulnerability in the core module reported by [Maurice Dauer](https:

	Issue summary: The vulnerability allowed to inject malformed HTML bypassing content sanitization, which could result in executing JavaScript code. See [CVE-2021-41164](https:

You can read more details in the relevant security advisory and [contact us](security@cksource.com) if you have more questions.

**An upgrade is highly recommended!**

**Highlights:**

Adobe [ended support of Flash Player](https:
We have decided to deprecate and remove the [Flash](https:

New Features:

* [#3433](https:
* [#4374](https:
* [#4461](https:
* [#4462](https:
* [#4612](https:
* [#4681](https:
* [#4750](https:
* [#4807](https:
* [#4850](https:
* [#4874](https:
* [#4026](https:
* [#4467](https:

Fixed Issues:

* [#3757](https:
* [#3876](https:
* [#4444](https:
* [#4596](https:
* [#4597](https:
* [#4604](https:
* [#4761](https:
* [#4783](https:
* [#4790](https:
* [#4874](https:
* [#4888](https:
* [#4858](https:
* [#4892](https:
* [#3858](https:
* [#4891](https:

API Changes:

* [#4462](https:
* [#4583](https:
* [#4604](https:
* [#4790](https:

Other Changes:

* [#4866](https:
* [#4901](https:

## CKEditor 4.16.2

**Security Updates:**

* Fixed XSS vulnerability in the [Clipboard](https:

	Issue summary: The vulnerability allowed to abuse paste functionality using malformed HTML, which could result in injecting arbitrary HTML into the editor. See [CVE-2021-32809](https:

* Fixed XSS vulnerability in the [Widget](https:

	Issue summary: The vulnerability allowed to abuse undo functionality using malformed [Widget](https:

* Fixed XSS vulnerability in the [Fake Objects](https:

	Issue summary: The vulnerability allowed to inject malformed [Fake Objects](https:

You can read more details in the relevant security advisory and [contact us](security@cksource.com) if you have more questions.

**An upgrade is highly recommended!**

Fixed Issues:
* [#4777](https:
* [#4733](https:
	* [#4728](https:
	* [#3863](https:
* [#3819](https:
* [#4666](https:
	* [#681](https:
	* [#641](https:
* [#3638](https:
* [#4247](https:
* [#4555](https:
* [#4782](https:

## CKEditor 4.16.1

Fixed Issues:
* [#4617](https:
* [#4493](https:
* [#1572](https:
* [#4301](https:
* [#4351](https:
* [#4509](https:
* [#4611](https:
* [#4652](https:
* [#4659](https:

## CKEditor 4.16

**Security Updates:**

* Fixed ReDoS vulnerability in the [Autolink](https:

	Issue summary: It was possible to execute a ReDoS-type attack inside CKEditor 4 by persuading a victim to paste a specially crafted URL-like text into the editor and press <kbd>Enter</kbd> or <kbd>Space</kbd>.

* Fixed ReDoS vulnerability in the [Advanced Tab for Dialogs](https:

	Issue summary: It was possible to execute a ReDoS-type attack inside CKEditor 4 by persuading a victim to paste a specially crafted text into the Styles dialog.

**An upgrade is highly recommended!**

New Features:

* [#2800](https:
* [#2800](https:
* [#3582](https:
* [#4388](https:

Fixed Issues:

* [#1134](https:
* [#2800](https:
* [#4379](https:
* [#4422](https:
* [#2208](https:
* [#1824](https:
* [#4253](https:
* [#4372](https:

API Changes:

* [#4358](https:
* [#3782](https:
* [#4297](https:
* [#4394](https:

Other Changes:

* The [WebSpellChecker](https:

## CKEditor 4.15.1

**Security Updates:**

* Fixed XSS vulnerability in the [Color History feature](https:

	Issue summary: It was possible to execute an XSS-type attack inside CKEditor 4 by persuading a victim to paste a specially crafted HTML code into the [Color Button](https:

**An upgrade is highly recommended!**

Fixed Issues:

* [#4293](https:
* [#3961](https:
* [#3649](https:
* [#4282](https:
* [#4273](https:
* [#1330](https:
* [#4286](https:
* [#848](https:

API Changes:

* [#3649](https:

Other Changes:

* [#4262](https:
* Updated the [Export to PDF](https:
	* Improved external CSS support for [classic editor](https:

## CKEditor 4.15

New features:

* [#3940](https:
* [#3793](https:
* [#1795](https:
* [#3783](https:

Fixed Issues:

* [#4060](https:
* [#4183](https:
* [#3693](https:
* [#3795](https:
* [#4107](https:
* [#4041](https:
* [#3361](https:
* [#4007](https:
* [#4141](https:

## CKEditor 4.14.1

Fixed Issues:

* [#2607](https:
* [#3866](https:
* [#3931](https:
* [#3938](https:
* [#2823](https:
* [#909](https:
* [#1959](https:
* [#3156](https:
* [#624](https:
* [#3000](https:
* [#1883](https:
* [#3926](https:
* [#4008](https:
* [#3998](https:

Other Changes:

* Updated [WebSpellChecker](https:
	* Fixed: Active [Autocomplete](https:

## CKEditor 4.14

**Security Updates:**

* Fixed XSS vulnerability in the HTML data processor reported by [Michał Bentkowski](https:

	Issue summary: It was possible to execute XSS inside CKEditor after persuading the victim to: (i) switch CKEditor to source mode, then (ii) paste a specially crafted HTML code, prepared by the attacker, into the opened CKEditor source area, and (iii) switch back to WYSIWYG mode or (i) copy the specially crafted HTML code, prepared by the attacker and (ii) paste it into CKEditor in WYSIWYG mode.

* Fixed XSS vulnerability in the WebSpellChecker Dialog plugin reported by [Pham Van Khanh](https:

	Issue summary: It was possible to execute XSS using CKEditor after persuading the victim to: (i) switch CKEditor to source mode, then (ii) paste a specially crafted HTML code, prepared by the attacker, into the opened CKEditor source area, then (iii) switch back to WYSIWYG mode, and (iv) preview CKEditor content outside CKEditor editable area.

**An upgrade is highly recommended!**

New features:

* [#2374](https:
* [#2583](https:
* [#3748](https:
* [#3661](https:
* [#3547](https:
* [#3441](https:

Fixed Issues:

* [#3587](https:
* [#3705](https:
* [#1306](https:
* [#3498](https:
* [#2517](https:
* [#3007](https:
* [#3698](https:

API Changes:

* [#3387](https:
* [#3727](https:
* [#3728](https:
* [#3842](https:
* [#3775](https:

## CKEditor 4.13.1

Fixed Issues:

* [#875](https:
* [#3415](https:
* [#3413](https:
* [#3475](https:
* [#2027](https:
* [#3544](https:
* [#1653](https:
* [#3559](https:
* [#3593](https:
* [#3524](https:
* [#3552](https:
* [#3586](https:
* [#3585](https:
* [#3625](https:
* [#3474](https:
* [#3689](https:

API Changes:

* [#3634](https:

## CKEditor 4.13

New Features:

* [#835](https:
   * Added support for pasting rich content from Google Docs with the [Paste from Google Docs](https:
   * Added a new [Paste Tools](https:
* [#3315](https:
* [#3175](https:
    * [#3256](https:
    * [#3118](https:
    * [#3161](https:
* [#3359](https:
* [#2227](https:
* [#3240](https:
* [#3138](https:

Fixed Issues:

* [#808](https:
* [#3260](https:
* [#3261](https:
* [#3198](https:
* [#2859](https:
	* [#2845](https:
	* [#2857](https:
	* [#2858](https:
* [#3158](https:
* [#504](https:
* [#3101](https:
* [#3287](https:
* [#3379](https:
* [#941](https:
* [#3136](https:
* [#3381](https:
* [#2395](https:
* [#453](https:
* [#2138](https:
* [#14613](https:
* [#2257](https:
* [#3115](https:
* [#3354](https:
* [#3423](https:

API Changes:

* [#3154](https:
* [#3245](https:
* [#2845](https:
* [#2975](https:
* [#3247](https:
* [#3326](https:
* [#2423](https:
* [#3124](https:

## CKEditor 4.12.1

Fixed Issues:

* [#3220](https:

## CKEditor 4.12

New Features:

* [#2598](https:
* [#1490](https:
* [#2870](https:
* [#2048](https:
* [#2639](https:
* [#2084](https:
* [#3164](https:

Fixed Issues:

* [#2672](https:
* [#1478](https:
* [#1469](https:
* [#2235](https:
* [#3098](https:
* [#2923](https:
* [#3120](https:
* [#2813](https:
* [#2751](https:

API Changes:

* [#1496](https:
* [#2021](https:
* [#2700](https:
* [#3123](https:
* [#3123](https:
* [#3123](https:
* [#2821](https:
* [#2598](https:
* [#2748](https:
* [#2698](https:
* [#2935](https:
* [#2962](https:
* [#2924](https:
* [#2495](https:
* [#2692](https:

Other Changes:

* [#2741](https:
* [#2924](https:
* [#3132](https:

## CKEditor 4.11.4

Fixed Issues:

* [#589](https:
* [#1397](https:
* [#1479](https:
* [#2816](https:
* [#2874](https:
* [#2775](https:
* [#1901](https:

Other Changes:

* Updated [WebSpellChecker](https:
	* Language dictionary update: German language was extended with over 600k new words.
	* Language dictionary update: Swedish language was extended with over 300k new words.
	* Grammar support added for Australian and New Zealand English, Polish, Slovak, Slovenian and Austrian languages.
	* Changed wavy red and green lines that underline spelling and grammar errors to straight ones.
	* [#55](https:
	* [#166](https:
	* [#56](https:
	* Fixed: After removing a dictionary, the words are not underlined and considered as incorrect.
	* Fixed: The Slovenian (`sl_SL`) language does not work.
	* Fixed: Quotes with code `U+2019` (Right single quotation mark) are considered separators.
	* Fixed: Wrong error message formatting when the service ID is invalid.
	* Fixed: Absent languages in the Languages tab when using SCAYT with the [Shared Spaces](https:

## CKEditor 4.11.3

Fixed Issues:

* [#2721](https:
* [#2527](https:
* [#2572](https:
* [#1191](https:
* [#2292](https:
* [#2756](https:
* [#1986](https:
* [#2565](https:
* [#2792](https:
    * [#2780](https:
    * [#2470](https:
    * [#2655](https:

## CKEditor 4.11.2

Fixed Issues:

* [#2403](https:
* [#2514](https:
* [#2451](https:
* [#2546](https:
* [#2506](https:
* [#2650](https:
* [#2690](https:
* [#2205](https:
* [#2411](https:
* [#2430](https:

Other Changes:

* Updated the [WebSpellChecker](https:
	* [#52](https:
* [#2603](https:

## CKEditor 4.11.1

Fixed Issues:

* [#2571](https:

## CKEditor 4.11

**Security Updates:**

* Fixed XSS vulnerability in the HTML parser reported by [maxarr](https:

	Issue summary: It was possible to execute XSS inside CKEditor after persuading the victim to: (i) switch CKEditor to source mode, then (ii) paste a specially crafted HTML code, prepared by the attacker, into the opened CKEditor source area, and (iii) switch back to WYSIWYG mode.

**An upgrade is highly recommended!**

New Features:

* [#2062](https:
* [#2154](https:
* [#1815](https:
* [#2478](https:
* [#651](https:
* [#2248](https:
* [#706](https:
* [#2072](https:
* [#1176](https:
* [#2202](https:

Fixed Issues:

* [#1477](https:
* [#2394](https:
* [#1181](https:
* [#2276](https:
* [#1489](https:
* [#1264](https:
* [#586](https:
* [#2380](https:
* [#2294](https:
* [#2035](https:
* [#965](https:
* [#2448](https:
* [#898](https:
* [#1113](https:
* [#1682](https:
* [#421](https:
* [#1454](https:
* [#1451](https:
* [#1722](https:
* [#2491](https:
* [#2519](https:

API Changes:

* [#2453](https:
* [#2224](https:
* [#2253](https:
* [#2045](https:
	* [`tools.eventsBuffer`](https:
	* [`tools.throttle`](https:
* [#2466](https:
* [#2493](https:
* [#2483](https:

Other Changes:

* [#1713](https:

## CKEditor 4.10.1

Fixed Issues:

* [#2114](https:
* [#2107](https:
* [#2167](https:
* [#2195](https:
* [#2169](https:
* [#1084](https:
* [#2271](https:
* [#2296](https:
* [#966](https:
* [#1719](https:
* [#1046](https:
* [#1348](https:
* [#1791](https:
* [#2254](https:
* [#1184](https:
* [#1916](https:
* [#2003](https:
* [#1816](https:
* [#1115](https:
* [#727](https:
* [#988](https:

API Changes:

* [#2249](https:

## CKEditor 4.10

New Features:

* [#1751](https:
	* [Autocomplete](https:
	* [Text Watcher](https:
	* [Text Match](https:
* [#1703](https:
* [#1746](https:
* [#1761](https:

Fixed Issues:

* [#1458](https:
* [#1034](https:
* [#1748](https:
* [#1321](https:
* [#1776](https:
* [#1592](https:
* [#620](https:
* [#1467](https:

API Changes:

* [#850](https:
* [#1582](https:
* [#1712](https:
* [#1802](https:
* [#1724](https:
* [#1498](https:
* [#1993](https:

Other Changes:

* Updated [SCAYT](https:
	* Language dictionary update: Added support for the Uzbek Latin language.
	* Languages no longer supported as additional languages: Manx - Isle of Man (`gv_GB`) and Interlingua (`ia_XR`).
	* Extended and improved language dictionaries: Georgian and Swedish. Also added the missing word _"Ensure"_ to the American, British and Canada English language.
	* [#141](https:
	* [#153](https:
	* [#155](https:
	* [#156](https:
	* Fixed: After some text is dragged and dropped, the markup is not refreshed for grammar problems in SCAYT.
	* Fixed: Request to FastCGI fails when the user tries to replace a word with non-English characters with a proper suggestion in WSC.
	* [Firefox] Fixed: <kbd>Ctrl</kbd>+<kbd>Z</kbd> removes focus in SCAYT.
	* Grammar support for default languages was improved.
	* New application source URL was added in SCAYT.
	* Removed green marks and legend related to grammar-supported languages in the Languages tab of SCAYT. Grammar is now supported for almost all the anguages in the list for an additional fee.
	* Fixed: JavaScript error in the console: "Cannot read property 'split' of undefined" in SCAYT and WSC.
	* [IE10] Fixed: Markup is not set for a specific case in SCAYT.
	* Fixed: Accessibility issue: No `alt` attribute for the logo image in the About tab of SCAYT.

## CKEditor 4.9.2

**Security Updates:**

* Fixed XSS vulnerability in the [Enhanced Image](https:

	Issue summary: It was possible to execute XSS inside CKEditor using the `<img>` tag and specially crafted HTML. Please note that the default presets (Basic/Standard/Full) do not include this plugin, so you are only at risk if you made a custom build and enabled this plugin.

We would like to thank the [Drupal security team](https:

## CKEditor 4.9.1

Fixed Issues:

* [#1835](https:

## CKEditor 4.9

New Features:

* [#932](https:
    * [Easy Image](https:
    * [Cloud Services](https:
    * [Image Base](https:
* [#1338](https:
* [#643](https:
* [#1365](https:
* [#1399](https:
* [#1441](https:

Fixed Issues:

* [#595](https:
* [#869](https:
* [#1419](https:
* [#1274](https:
* [#1232](https:
* [#1342](https:
* [#1426](https:
* [#1470](https:
* [#1048](https:
* [#889](https:
* [#859](https:
* [#1013](https:
* [#1356](https:
* [#1010](https:
* [#1535](https:
* [#1516](https:
* [#1570](https:
* [#1363](https:


API Changes:

* [#1346](https:
* [#1530](https:

Other Changes:

* Updated [SCAYT](https:
	* SCAYT [`scayt_minWordLength`](https:
	* SCAYT default number of suggested words in the context menu changed to 3.
	* [#90](https:
	* Fixed: SCAYT crashes when the browser `localStorage` is disabled.
	* [IE11] Fixed: `Unable to get property type of undefined or null reference` error in the browser console when SCAYT is disabled/enabled.
	* [#46](https:
	* Fixed: User Dictionary cannot be created in WSC due to `You already have the dictionary` error.
	* Fixed: Words with apostrophe `'` on the replacement make the WSC dialog inaccessible.
	* Fixed: SCAYT/WSC causes the `Uncaught TypeError` error in the browser console.
* [#1337](https:
* [#1591](https:

## CKEditor 4.8

**Important Notes:**

* [#1249](https:

New Features:

* [#933](https:
* [#662](https:
* [#468](https:
* [#607](https:
* [#584](https:
* [#856](https:
* [#1053](https:
* [#1073](https:

Fixed Issues:

* [#796](https:
* [#834](https:
* [#704](https:
* [#591](https:
* [#787](https:
* [#842](https:
* [#711](https:
* [#862](https:
* [#994](https:
* [#1014](https:
* [#877](https:
* [#605](https:
* [#1008](https:
* [#1094](https:
* [#1057](https:
* [#1068](https:
* [#921](https:
* [#1213](https:
* [#532](https:
* [#1221](https:
* [#522](https:
* [#1027](https:
* [#1069](https:
* [#995](https:
* [#1287](https:

API Changes:

* [#1097](https:
* [#1118](https:
* [#1145](https:

Other Changes:

* [#815](https:
* [#1041](https:

## CKEditor 4.7.3

New Features:

* [#568](https:

Fixed Issues:

* [#554](https:
* [#566](https:
* [#779](https:
* [#423](https:
* [#719](https:
* [#577](https:
* [#867](https:
* [#817](https:

Other Changes:

* Updated the [WebSpellChecker](https:
	* [#40](https:
* [#800](https:
* [#830](https:

## CKEditor 4.7.2

New Features:

* [#455](https:

Fixed Issues:

* [#663](https:
* [#694](https:
  * [#520](https:
  * [#460](https:
* [#579](https:
* [#545](https:
* [#582](https:
* [#491](https:
* [#646](https:
* [#501](https:
* [#9780](https:
* [#16820](https:
* [#426](https:
* [#644](https:
* [#684](https:

Other Changes:

* Updated the [SCAYT](https:
	* [#148](https:
* [#751](https:

## CKEditor 4.7.1

New Features:

* Added a new Mexican Spanish localization. Thanks to [David Alexandro Rodriguez](https:
* [#413](https:

Fixed Issues:

* [#515](https:
* [#493](https:
* [#415](https:
* [#457](https:
* [#478](https:
* [#424](https:
* [#476](https:
* [#417](https:
* [#523](https:
* [#534](https:
* [#450](https:

## CKEditor 4.7

**Important Notes:**

* [#13793](https:
* The [UI Color](https:

New Features:

* [#16755](https:
* [#16961](https:
* [#13381](https:
* [#16971](https:
* [#16847](https:
* [#16818](https:
* [#16850](https:
* [#16937](https:
* [#17010](https:

Fixed Issues:

* [#16935](https:
* [#16825](https:
* [#16857](https:
* [#16845](https:
* [#16786](https:
* [#14714](https:
* [#16913](https:
* [#16968](https:
* [#16912](https:
* [#16821](https:
* [#16866](https:
* [#16860](https:
* [#16817](https:
* [#16833](https:
* [#16826](https:
* [#12465](https:
* [#13062](https:
* [#13585](https:
* [#16811](https:
* [#16810](https:
* [#11956](https:
* [#10472](https:
* [#14762](https:
* [#16777](https:
* [#14894](https:
* [#14769](https:
* [#16804](https:
* [#14407](https:
* [#16927](https:
* [#16920](https:
* [PR#336](https:
* [#17027](https:
* Fixed the behavior of HTML parser when parsing `src`/`srcdoc` attributes of the `<iframe>` element in a CKEditor setup with ACF turned off and without the [Iframe Dialog](https:

Other Changes:

* Updated [SCAYT](https:
	* Fixed: DOM Exception after clicking "Remove Language" on a selected word with enabled [Language](https:
* [#16958](https:
* [#16954](https:
* [#16982](https:
* [#17025](https:

## CKEditor 4.6.2

New Features:

* [#16733](https:
* [#16752](https:
* [#13818](https:

Fixed Issues:

* [#13446](https:
* [#14856](https:
* [#16745](https:
* [#16682](https:
* [#10373](https:
* [#16728](https:
* [#16795](https:
* [#16675](https:
* [#16753](https:
* [#16705](https:
* [#14869](https:

## CKEditor 4.6.1

New Features:

* [#16639](https:

Fixed Issues:

* [#11064](https:
* [#14755](https:
* [#16624](https:
* [#16600](https:

## CKEditor 4.6

New Features:

* [#14569](https:
* [#14707](https:
* Introduced the completely rewritten [Paste from Word](https:
	* Backward incompatibility: The [`config.pasteFromWordRemoveFontStyles`](https:
	* Backward incompatibility: The [`config.pasteFromWordNumberedHeadingToList`](https:
	* Major improvements in preservation of list numbering, styling and indentation (nested lists with multiple levels).
	* Major improvements in document structure parsing that fix plenty of issues with distorted or missing content after paste.
* Added new translation: Occitan. Thanks to [Cédric Valmary](https:
* [#10015](https:
* [#13794](https:
* [#12541](https:
* [#14449](https:
* [#12077](https:
* [#13518](https:
* [#14889](https:

Fixed Issues:

* [#9991](https:
* [#7209](https:
* [#14335](https:
* [#14542](https:
* [#14544](https:
* [#14660](https:
* [#14867](https:
* [#2507](https:
* [#3336](https:
* [#6115](https:
* [#6342](https:
* [#6457](https:
* [#6789](https:
* [#7262](https:
* [#7662](https:
* [#7807](https:
* [#7950](https:
* [#7982](https:
* [#8231](https:
* [#8266](https:
* [#8341](https:
* [#8754](https:
* [#8983](https:
* [#9331](https:
* [#9422](https:
* [#10011](https:
* [#10643](https:
* [#10784](https:
* [#11294](https:
* [#11627](https:
* [#12784](https:
* [#13174](https:
* [#13828](https:
* [#13829](https:
* [#13519](https:

Other Changes:

* Updated [SCAYT](https:
 	* Support for the new default Moono-Lisa skin.
 	* [#121](https:
 	* [#125](https:
 	* [#127](https:
 	* [#128](https:

## CKEditor 4.5.11

**Security Updates:**

* [Severity: minor] Fixed the `target="_blank"` vulnerability reported by James Gaskell.

	Issue summary: If a victim had access to a spoofed version of ckeditor.com via HTTP (e.g. due to DNS spoofing, using a hacked public network or mailicious hotspot), then when using a link to the ckeditor.com website it was possible for the attacker to change the current URL of the opening page, even if the opening page was protected with SSL.

  An upgrade is recommended.

New Features:

* [#14747](https:
* [#7154](https:

Fixed Issues:

* [#13362](https:
* [#13755](https:
* [#13548](https:
* [#13812](https:
* [#14659](https:
* [#14825](https:

## CKEditor 4.5.10

Fixed Issues:

* [#10750](https:
* [#14413](https:
* [#14451](https:
* [#14590](https:
* [#14539](https:
* [#14701](https:
* [#14667](https:
* [#14252](https:
* [#14275](https:

## CKEditor 4.5.9

Fixed Issues:

* [#10685](https:
* [#14573](https:
* [#14620](https:
* [#14538](https:
* [#14602](https:
* [#8679](https:
* [#11697](https:
* [#13886](https:
* [#14535](https:

## CKEditor 4.5.8

New Features:

* [#12440](https:

Fixed Issues:

* [#10448](https:
* [#12707](https:
* [#13756](https:

## CKEditor 4.5.7

New Features:

* [#14327](https:

Fixed Issues:

* [#13816](https:
	* [#12727](https:
	* [#13377](https:
	* [#13389](https:
	* [#13513](https:
* [#13884](https:
* [#14234](https:

## CKEditor 4.5.6

New Features:

* Introduced the [`CKEDITOR.tools.getCookie()`](https:
* Introduced the [`CKEDITOR.tools.getCsrfToken()`](https:

Other Changes:

* Updated [SCAYT](https:
	- New features:
		- CKEditor [Language](https:
		- CKEditor [Placeholder](https:
		- [Drag&Drop](https:
		- **Experimental** [GRAYT](https:
	- Fixed issues:
		* [#98](https:
		* [#102](https:
		* [#104](https:
		* [#105](https:
		* [#107](https:
		* [#108](https:
		* SCAYT stops working when CKEditor [Undo plugin](https:
		* Issue with pasting SCAYT markup in CKEditor.
		* SCAYT stops working after pressing the *Cancel* button in the WSC dialog.

## CKEditor 4.5.5

Fixed Issues:

* [#13887](https:
* [#12189](https:
* [#9192](https:
* [#13790](https:
* [#13803](https:
* [#13867](https:
* [#13885](https:
* [#13883](https:
* [#13872](https:
* [#12848](https:
* [#13879](https:
* [#13361](https:
* [#13771](https:
* [#13782](https:
* [#13919](https:

Other Changes:

* [#13859](https:

## CKEditor 4.5.4

New Features:

* [#13632](https:
* [#13730](https:

Fixed Issues:

* [#9856](https:
* [#12733](https:
* [#13142](https:
* [#13599](https:
* [#13640](https:
* [#13533](https:
* [#13680](https:
* [#11724](https:
* [#13690](https:
* [#13284](https:
* [#13516](https:
* [#13765](https:

Other Changes:

* [#11725](https:
* [#13737](https:

## CKEditor 4.5.3

New Features:

* [#13501](https:
* [#13603](https:

Fixed Issues:

* [#13590](https:
  * [#11215](https:
  * [#8780](https:
  * [#12762](https:
* [#13386](https:
* [#13568](https:
* [#13453](https:
* [#13465](https:
* [#13414](https:
* [#13429](https:
* [#13388](https:

Other Changes:

* [#13637](https:
* Updated [Bender.js](https:

## CKEditor 4.5.2

Fixed Issues:

* [#13609](https:
* [PR#201](https:
* [#13422](https:
* [#13494](https:
* [#13409](https:
* [#13434](https:
* [#13460](https:
* [#13495](https:
* [#13528](https:
* [#13583](https:
* [#13468](https:
* [#13451](https:
* [#13184](https:
* [#13129](https:
* [#13397](https:
* [#13385](https:
* [#13419](https:
* [#13420](https:
* [#13410](https:
* [#13566](https:
* [#11616](https:
* [#11376](https:
* [#13143](https:
* [#13387](https:
* [#13574](https:
* [#13441](https:
* [#13554](https:
* [#13440](https:

Other Changes:

* [#13421](https:

## CKEditor 4.5.1

Fixed Issues:

* [#13486](https:

## CKEditor 4.5

New Features:

* [#13304](https:
* [#13215](https:
* [#13213](https:
* [#13337](https:
* [#13214](https:

Fixed Issues:

* [#13334](https:
* [#13118](https:
* [#13158](https:
* [#13197](https:
* [#13199](https:
* [#13003](https:
* [#13032](https:
* [#13300](https:
* [#13036](https:
* [#13280](https:
* [#13186](https:
* [#13140](https:
* [#13176](https:
* [#13015](https:
* [#13080](https:
* [#13011](https:
* [#13105](https:
* [#11976](https:
* [#13128](https:
  * Fixed the default behavior of [`range.cloneContents()`](https:
  * Added `cloneId` arguments to the above methods, [`range.splitBlock()`](https:
  * Fixed issues where IDs were lost on copy&paste and drag&drop.
* Toolbar configurators:
  * [#13185](https:
  * [#13138](https:
  * [#13136](https:
  * [#13133](https:
  * [#13173](https:

Other Changes:

* [#13119](https:
* Toolbar configurators:
  * [#13147](https:
  * [#13207](https:
* [#13316](https:
* [#13398](https:
* [#13279](https:
* [#13454](https:

## CKEditor 4.5 Beta

New Features:

* Clipboard (copy&paste, drag&drop) and file uploading features and improvements ([#11437](https:

  * Major features:
    * Support for dropping and pasting files into the editor was introduced. Through a set of new facades for native APIs it is now possible to easily intercept and process inserted files.
    * [File upload tools](https:
    * [Upload Image](https:
    * All drag and drop operations were integrated with the editor. All dropped content is passed through the [`editor#paste`](https:
    * The [Data Transfer](https:
    * Switched from the pastebin to using the native clipboard access whenever possible. This solved many issues related to pastebin such as unnecessary scrolling or data loss. Additionally, on copy and cut from the editor the clipboard data is set. Therefore, on paste the editor has access to clean data, undisturbed by the browsers.
    * Drag and drop of inline and block widgets was integrated with the standard clipboard APIs. By listening to drag events you will thus be notified about widgets, too. This opens a possibility to filter pasted and dropped widgets.
    * The [`editor#paste`](https:
    * [#11621](https:

  * Other changes and related fixes:
    * [#12095](https:
    * [#11219](https:
    * [#9554](https:
    * [#9898](https:
    * [#11993](https:
    * [#12613](https:
    * [#12851](https:
    * [#12914](https:

  * Browser support.<br>Browser support for related features varies significantly (see http:
    * File APIs needed to operate and file upload is not supported in Internet Explorer 9 and below.
    * Only Chrome and Safari on Mac OS support setting custom data items in the clipboard, so currently it is possible to recognize the origin of the copied content in these browsers only. All drag and drop operations can be identified thanks to the new Data Transfer facade.
    * No Internet Explorer browser supports the standard clipboard API which results in small glitches like where only plain text can be dropped from outside the editor. Thanks to the new Data Transfer facade, internal and cross-editor drag and drop supports the full range of data.
    * Direct access to clipboard could only be implemented in Chrome, Safari on Mac OS, Opera and Firefox. In other browsers the pastebin must still be used.

* [#12875](https:
  * The old set of samples shipped with every CKEditor package was replaced with a shiny new single-page sample. This change concluded a long term plan which started from introducing the [CKEditor SDK](https:
  * Toolbar configurators with live previews were introduced. They will be shipped with every CKEditor package and are meant to help in configuring toolbar layouts.

* [#10925](https:
* [#10931](https:
  * [#12018](https:
  * [#12024](https:
  * [#12006](https:
  * [#12008](https:

* Notification system:
  * [#11580](https:
  * [#12810](https:
* [#11636](https:
* [#12416](https:
* [#12036](https:
* [#11905](https:
* [#12126](https:
* [#12746](https:
* [#12150](https:
* [#12448](https:
* [#12143](https:
* [#10986](https:
* [#12770](https:
* [#11583](https:

Changes:

* [#12858](https:
* [#12948](https:
* [#13069](https:
* [#12870](https:
* [#8024](https:
* [#10903](https:
* [#11856](https:

Fixed issues:

* [#11586](https:
* [#12148](https:
* [#12503](https:
* [#13001](https:
* [#13101](https:

## CKEditor 4.4.8

**Security Updates:**

* Fixed XSS vulnerability in the HTML parser reported by [Dheeraj Joshi](https:

	Issue summary: It was possible to execute XSS inside CKEditor after persuading the victim to: (i) switch CKEditor to source mode, then (ii) paste a specially crafted HTML code, prepared by the attacker, into the opened CKEditor source area, and (iii) switch back to WYSIWYG mode.

**An upgrade is highly recommended!**

Fixed Issues:

* [#12899](https:
* [#13254](https:
* [#13268](https:
* [#12739](https:
* [#13292](https:
* [PR#192](https:
* [#13232](https:
* [#13233](https:
* [#12796](https:
* [#12885](https:
* [#11982](https:
* [#13027](https:
* [#12256](https:
* [#12729](https:
* [#13031](https:
* [#13131](https:
* [#9086](https:
* [#13164](https:
* [#13155](https:
* [#13351](https:
* [#13344](https:

Other Changes:

* [#12844](https:
* [#12930](https:
* [#13266](https:


## CKEditor 4.4.7

Fixed Issues:

* [#12825](https:
* [#12157](https:
* [#12777](https:
* [#12812](https:
* [#12735](https:
* [#10032](https:
* [#12597](https:
* [#12387](https:
* [#12747](https:
* [#12850](https:

## CKEditor 4.4.6

**Security Updates:**

* Fixed XSS vulnerability in the HTML parser reported by [Maco Cortes](https:

	Issue summary: It was possible to execute XSS inside CKEditor after persuading the victim to: (i) switch CKEditor to source mode, then (ii) paste a specially crafted HTML code, prepared by the attacker, into the opened CKEditor source area, and (iii) switch back to WYSIWYG mode.

**An upgrade is highly recommended!**

New Features:

* [#12501](https:
* [#12550](https:

Fixed Issues:

* [#12506](https:
* [#12683](https:
* [#12489](https:
* [#12621](https:
* [#12630](https:
* [#11647](https:
* [#12601](https:
* [#12546](https:
* [#12300](https:
* [#12141](https:
* [#12515](https:
* [#12484](https:
* [#12688](https:
* [#12403](https:
* [#12609](https:


## CKEditor 4.4.5

New Features:

* [#12279](https:

Fixed Issues:

* [#12423](https:
* [#12381](https:
* [#10804](https:
* [#9137](https:
* [#12377](https:
* [#12162](https:
* [#12315](https:
* [#12113](https:
* [#12311](https:
* [#12261](https:
* [#12398](https:
* [#12097](https:
* [#12411](https:
* [#12354](https:
* [#12324](https:
* [#12332](https:
* [#12402](https:
* [#12338](https:


## CKEditor 4.4.4

Fixed Issues:

* [#12268](https:
* [#12263](https:
* [#12243](https:
* [#111739](https:
  * [#10926](https:
  * [#11611](https:
  * [#12219](https:
* [#10916](https:
* [#11970](https:
* [#12111](https:
* [#10030](https:
* [#12273](https:
* [#12218](https:
* [#12178](https:
* [#12185](https:
* [#12215](https:
* [#12135](https:
* [#12298](https:
* [#12204](https:
* [#11915](https:
* [SCAYT](https:


Other Changes:

* [#12296](https:

## CKEditor 4.4.3

**Security Updates:**

* Fixed XSS vulnerability in the Preview plugin reported by Mario Heiderich of [Cure53](https:

**An upgrade is highly recommended!**

New Features:

* [#12164](https:

Fixed Issues:

* [#12110](https:
* [#11897](https:
* [#12140](https:
* [#12132](https:
* [#9317](https:
* [#9638](https:
* [#8117](https:
* [#10422](https:

## CKEditor 4.4.2

Important Notes:

* The CKEditor testing environment is now publicly available. Read more about how to set up the environment and execute tests in the [CKEditor Testing Environment](https:
	Please note that the [`tests/`](https:

New Features:

* [#11909](https:

Fixed Issues:

* [#11757](https:
* [#10091](https:
* [#11478](https:
* [#10867](https:
* [#11983](https:
* [#12000](https:
* [#12022](https:
* [#11960](https:
* [#11306](https:
* [#11957](https:
* [#11980](https:
* [#12009](https:
* [#11387](https:
* [#7975](https:
* [#11947](https:
* [#11972](https:
* [#7634](https:
* [#11910](https:
* [#11753](https:
* [#11830](https:
* [#11945](https:
* [#11384](https:

## CKEditor 4.4.1

New Features:

* [#9661](https:

Fixed Issues:

* [#11861](https:
* [#10714](https:
* [#11911](https:
* [#11926](https:
* [#11223](https:
* [#11859](https:
* [#11754](https:
* [#11848](https:
* [#11801](https:
* [#11626](https:
* [#11872](https:
* [#11813](https:
* [#11814](https:
* [#11839](https:
* [#11822](https:
* [#11823](https:
* [#11788](https:
* [#11788](https:
* [#11798](https:
* [#11793](https:
* [#11850](https:
* [#11811](https:
* [#11777](https:
* [#11880](https:

Other Changes:

* [#11807](https:
* [#9504](https:
* [#11809](https:

## CKEditor 4.4

**Important Notes:**

* Marked the [`editor.beforePaste`](https:
* The default class of captioned images has changed to `image` (was: `caption`). Please note that once edited in CKEditor 4.4+, all existing images of the `caption` class (`<figure class="caption">`) will be [filtered out](https:
* Widgets without defined buttons are no longer registered automatically to the [Advanced Content Filter](https:
* The [Show Borders](https:
* Since CKEditor 4.4 the editor instance should be passed to [`CKEDITOR.style`](https:

New Features:

* [#11297](https:
  * Introduced the [`CKEDITOR.style.addCustomHandler()`](https:
  * The [`CKEDITOR.style.apply()`](https:
  * Many new methods and properties were introduced in the [Widget API](https:
  * Integration with the [Allowed Content Filter](https:
* [#11300](https:
  * Introduced the [`config.image2_captionedClass`](https:
  * Introduced the [`config.image2_alignClasses`](https:
  If this setting is defined, the editor produces classes instead of inline styles for aligned images.
  * Default image caption can be translated (customized) with the `editor.lang.image2.captionPlaceholder` string.
* [#11341](https:
* [#10202](https:
* [#10276](https:
* [#10480](https:
* [#11737](https:
* [#11532](https:
* [#11536](https:
* [#11225](https:

Other Changes:

* [#11377](https:
* [#11422](https:
* [#5217](https:
  * Introduced the [`editable.status`](https:
  * Introduced a new `forceUpdate` option for the [`editor.lockSnapshot`](https:
  * Fixed: Selection not being unlocked in inline editor after setting data ([#11500](https:
* The [WebSpellChecker](https:

Fixed Issues:

* [#10190](https:
* [#11727](https:

## CKEditor 4.3.5

New Features:

* Added new translation: Tatar.

Fixed Issues:

* [#11677](https:
* [#11717](https:

## CKEditor 4.3.4

Fixed Issues:

* [#11597](https:
* [#11544](https:
* [#8663](https:
* [#11574](https:
* [#11603](https:
* [#9205](https:
* [#11635](https:
* [#11660](https:
* [#11641](https:
* [#11568](https:

## CKEditor 4.3.3

Fixed Issues:

* [#11500](https:
* [#11104](https:
* [#11487](https:
* [#8673](https:
* [#11413](https:
* [#11438](https:
* [#8899](https:
* [#11490](https:
* [#11417](https:
* [#11253](https:
* [#11359](https:
* [#11058](https:
* [#11508](https:
* [#11533](https:
* [#11400](https:
* [#11493](https:
* [#11390](https:
* [#11542](https:
* [#11504](https:
* [#11004](https:
* [#11439](https:

## CKEditor 4.3.2

Fixed Issues:

* [#11331](https:
* [#11177](https:
  * [#11176](https:
  * [#11001](https:
  * [#11161](https:
  * [#11281](https:
* [#11207](https:
* [#11102](https:
  * [#11102](https:
  * [#11216](https:
* [#11121](https:
* [#11350](https:
* [#11097](https:
* [#11290](https:
* [#11133](https:
* [#11126](https:
* [#11131](https:
* [#11139](https:
* [#10778](https:
* [#11146](https:
* [#10762](https:
* [#11186](https:
* [#11307](https:
* [#11140](https:
* [#11379](https:
* [#10787](https:
* [#10884](https:
* [#11021](https:
* [#11086](https:
* [#11372](https:
* [#10068](https:
* [#11283](https:
* [#11196](https:

## CKEditor 4.3.1

**Important Notes:**

* To match the naming convention, the `language` button is now `Language` ([#11201](https:
* [Enhanced Image](https:

Fixed Issues:

* [#11244](https:
* [#11171](https:
* [#11085](https:
* [#11044](https:
* [#11075](https:
* [#11165](https:
* [#11159](https:
* [#11101](https:
* [#11077](https:
* [#10853](https:
* [#11198](https:
* [#11132](https:
* [#11182](https:
* [#11204](https:
* [#11202](https:
* [#10890](https:
* [#10055](https:
* [#11183](https:
* [#11042](https:
* [#11125](https:
* [#11011](https:
* [#11179](https:
* [#11237](https:
* [#11250](https:
* [#11260](https:
* [#11200](https:

## CKEditor 4.3

New Features:

* [#10612](https:
* [#10869](https:
* [#10886](https:
* [#10933](https:
* [#10936](https:
* [#10895](https:
* [#11002](https:
* [#10937](https:
  * loading indicator ([#10948](https:
  * applying paragraph changes (like font color change) to iframe ([#10841](https:
  * Firefox and IE9 clipboard fixes ([#10857](https:
  * fixing same origin policy issue ([#10840](https:
  * fixing undo bugs ([#10842](https:
  * fixing other minor bugs.
* [#10862](https:
* [#10822](https:
* [#10856](https:
* [#10028](https:
* [#10848](https:
* [#10855](https:

Fixed Issues:

* [#10831](https:
* [#10835](https:
* [#10836](https:
* [#10939](https:
* [#10866](https:
* [#10833](https:
* [#10881](https:
* [#10879](https:
* [#10877](https:
* [#10877](https:
* [#11079](https:
* [#10870](https:
* [#10854](https:
* [#10823](https:
* [#10828](https:
* [#10865](https:
* [#11066](https:
* [#11027](https:
* [#10430](https:
* [#10911](https:
* [#11082](https:
* [#11083](https:
* [#10887](https:
* [#11074](https:
* [#11098](https:
* [#11110](https:
* [#11129](https:
* [#11123](https:
* [#11124](https:

## CKEditor 4.3 Beta

New Features:

* [#9764](https:
  * [Widget plugin](https:
  * New [`editor.enterMode`](https:
  * Dynamic editor settings. Starting from CKEditor 4.3 Beta, *Enter* mode values and [content filter](https:
      * Dynamic *Enter* mode values &ndash; [`editor.setActiveEnterMode()`](https:
      * Dynamic content filter instances &ndash; [`editor.setActiveFilter()`](https:
  * "Fake" selection was introduced. It makes it possible to virtually select any element when the real selection remains hidden. See the  [`selection.fake()`](https:
  * Default [`htmlParser.filter`](https:
  * Dozens of new methods were introduced &ndash; most interesting ones:
      * [`document.find()`](https:
      * [`document.findOne()`](https:
      * [`editable.insertElementIntoRange()`](https:
      * [`range.moveToClosestEditablePosition()`](https:
      * New methods for [`htmlParser.node`](https:
* [#10659](https:
* [#10664](https:
* [#7987](https:
* [#10708](https:

## CKEditor 4.2.3

Fixed Issues:

* [#10994](https:
* [#10975](https:
* [#9929](https:
* [#10963](https:
* [#11096](https:

## CKEditor 4.2.2

Fixed Issues:

* [#9314](https:
* [#10308](https:
* [#10945](https:
* [#10912](https:
* [#10913](https:
* [#10666](https:
* [#10910](https:
* [#10868](https:
* [#10915](https:
* [#10914](https:
* [#10812](https:
* [#10951](https:
* [#10704](https:
* [#10753](https:

## CKEditor 4.2.1

Fixed Issues:

* [#10301](https:
* [#10689](https:
* [#10368](https:
* [#9330](https:
* [#8103](https:
* [#9958](https:
* [#10662](https:
* [#9654](https:
* [#9816](https:
* [#10646](https:
* [#10623](https:
* [#10004](https:
* [#10731](https:
* It is now possible to set per instance [WebSpellChecker](https:

## CKEditor 4.2

**Important Notes:**

* Dropped compatibility support for Internet Explorer 7 and Firefox 3.6.

* Both the Basic and the Standard distribution packages will not contain the new [Indent Block](https:

New Features:

* [#10027](https:
* [#8244](https:
* [#10281](https:
* [#10042](https:
* [#9794](https:
* [#9923](https:
* [#8031](https:
* [#10280](https:

Fixed Issues:

* [#10599](https:
* [#10370](https:
* [#10438](https:

## CKEditor 4.1.3

New Features:

* Added new translation: Indonesian.

Fixed Issues:

* [#10644](https:
* [#5189](https:
* [#10562](https:
* [#10537](https:
* [#10610](https:

## CKEditor 4.1.2

New Features:

* Added new translation: Sinhala.

Fixed Issues:

* [#10339](https:
* [#10298](https:
* [#10367](https:
* [#10165](https:
* [#9761](https:
* [#6504](https:
* [#10146](https:
* [#10360](https:
* [#10361](https:
* [#10510](https:
* [#9945](https:
* [#10389](https:
* [WebSpellChecker](https:

## CKEditor 4.1.1

New Features:

* Added new translation: Albanian.

Fixed Issues:

* [#10172](https:
* [#10219](https:
* [#10265](https:
* [#10249](https:
* [#10268](https:
* [#9995](https:
* [#10320](https:
* [#10260](https:
* [#10315](https:
* [#10291](https:
* [#10330](https:
* [#10285](https:
* [#10131](https:
* [#10337](https:

## CKEditor 4.1

Fixed Issues:

* [#10192](https:
* [#10191](https:
* [#10224](https:
* Minor issues in plugin integration with Advanced Content Filter:
  * [#10166](https:
  * [#10195](https:
  * [#10213](https:

## CKEditor 4.1 RC

New Features:

* [#9829](https:

  Brand new data filtering system that works in 2 modes:

  * Based on loaded features (toolbar items, plugins) - the data will be filtered according to what the editor in its
  current configuration can handle.
  * Based on [`config.allowedContent`](https:
  will be filtered and the editor features (toolbar items, commands, keystrokes) will be enabled if they are allowed.

  See the `datafiltering.html` sample, [guides](https:
* [#9387](https:
* [#9907](https:
* [#9713](https:
* Included in [#9829](https:
* [#9981](https:
* Included in [#10103](https:
  * Introduced the [`editor.status`](https:
  * Default [`command`](https:
* [#9796](https:

## CKEditor 4.0.3

Fixed Issues:

* [#10196](https:
* [#10212](https:
* [#10219](https:

## CKEditor 4.0.2

Fixed Issues:

* [#9779](https:
* [#9772](https:
* [#9029](https:
* [#9887](https:
* [#9882](https:
* [#9773](https:
* [#9851](https:
* [#9903](https:
* [#9872](https:
* [#9893](https:
* [#9845](https:
* [#9883](https:
* [#9940](https:
* [#9966](https:
* [#9507](https:
* [#9947](https:
* [#10105](https:
* [#10123](https:
* [#10152](https:

## CKEditor 4.0.1.1

Fixed Issues:

* Security update: Added protection against XSS attack and possible path disclosure in the PHP sample.

## CKEditor 4.0.1

Fixed Issues:

* [#9655](https:
* Accessibility issues (mainly in inline editor): [#9364](https:
* [Magic Line](https:
    * [#9481](https:
    * [#9509](https:
    * [#9573](https:
* [#9754](https:
* [#9456](https:
* [#9699](https:
* Context menu:
    * [#9712](https:
    * [#9366](https:
    * [#9706](https:
* [#9800](https:
* [#9721](https:
* [#9528](https:
* [#9503](https:
* [#9769](https:
* [#9875](https:
* [#8675](https:
* [#9815](https:
* [#8888](https:
* [#9360](https:
* [#9531](https:
* [#9553](https:
* [#9594](https:
* [#9658](https:
* [#9686](https:
* [#9709](https:
* [#9726](https:
* [#9765](https:
* [#9771](https:
* [#9787](https:
* [#9842](https:
* [#9847](https:
* [#9853](https:
* [#8893](https:
* [#9693](https:


## CKEditor 4.0

The first stable release of the new CKEditor 4 code line.

The CKEditor JavaScript API has been kept compatible with CKEditor 4, whenever
possible. The list of relevant changes can be found in the [API Changes page of
the CKEditor 4 documentation][1].

[1]: https:
