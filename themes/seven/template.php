<?php

/**
 * Override or insert variables into the page template.
 */
function seven_preprocess_page(&$vars) {
    $vars['primary_local_tasks'] = menu_primary_local_tasks();
    $vars['secondary_local_tasks'] = menu_secondary_local_tasks();
    global $user;

    $alias = drupal_get_path_alias($_GET['q']);
    if ((strpos($alias, 'gallery') !== FALSE)) {
        $vars['template_files'][] = 'visitors_page';
    }
    if ((strpos($alias, 'front') !== FALSE)) {
        $vars['template_files'][] = 'visitors_page';
    }
    if (strpos($alias, 'contact') !== FALSE) {
        $vars['template_files'][] = 'visitors_page';
    }
}

/**
 * Display the list of available node types for node creation.
 */
function seven_node_add_list($content) {
    $output = '';
    if ($content) {
        $output = '<ul class="admin-list">';
        foreach ($content as $item) {
            $output .= '<li class="clearfix">';
            $output .= '<span class="label">' . l($item['title'], $item['href'], $item['localized_options']) . '</span>';
            $output .= '<div class="description">' . filter_xss_admin($item['description']) . '</div>';
            $output .= '</li>';
        }
        $output .= '</ul>';
    } else {
        $output = '<p>' . t('You have not created any content types yet. Go to the <a href="@create-content">content type creation page</a> to add a new content type.', array('@create-content' => url('admin/structure/types/add'))) . '</p>';
    }
    return $output;
}

function seven_theme() {
    return array(
        'front_page_title' => array(
            'template' => 'front_page_title',
            'arguments' => array('content' => NULL),
        ),
        'front_page_footer' => array(
            'template' => 'front_page_footer',
            'arguments' => array('content' => NULL),
        )
    );
}

function get_site_title_box() {
    $items = new stdClass();
    $items->title = 'POHODENKO MARIA STUDIO';

    return theme('front_page_title', $items);
}

function get_site_footer_box() {
    $items = new stdClass();
    $items->body = 'Developed by POHODENKO MARIA STUDIO Copyright ' . date('Y');

    return theme('front_page_footer', $items);
}

/**
 * Overrides theme_admin_block_content().
 *
 * Use unordered list markup in both compact and extended mode.
 */
function seven_admin_block_content($content) {
    $output = '';
    if (!empty($content)) {
        $output = system_admin_compact_mode() ? '<ul class="admin-list compact">' : '<ul class="admin-list">';
        foreach ($content as $item) {
            $output .= '<li class="leaf">';
            $output .= l($item['title'], $item['href'], $item['localized_options']);
            if (isset($item['description']) && !system_admin_compact_mode()) {
                $output .= '<div class="description">' . filter_xss_admin($item['description']) . '</div>';
            }
            $output .= '</li>';
        }
        $output .= '</ul>';
    }
    return $output;
}

/**
 * Override of theme_tablesort_indicator().
 *
 * Use our own image versions, so they show up as black and not gray on gray.
 */
function seven_tablesort_indicator($style) {
    $theme_path = drupal_get_path('theme', 'seven');
    if ($style == 'asc') {
        return theme('image', $theme_path . '/images/arrow-asc.png', t('sort ascending'), t('sort ascending'));
    } else {
        return theme('image', $theme_path . '/images/arrow-desc.png', t('sort descending'), t('sort descending'));
    }
}

/**
 * Override of theme_fieldset().
 *
 * Add span to legend tag, so we can style it to be inside the fieldset.
 */
function seven_fieldset($element) {
    if (!empty($element['#collapsible'])) {
        drupal_add_js('misc/collapse.js');

        if (!isset($element['#attributes']['class'])) {
            $element['#attributes']['class'] = '';
        }

        $element['#attributes']['class'] .= ' collapsible';
        if (!empty($element['#collapsed'])) {
            $element['#attributes']['class'] .= ' collapsed';
        }
    }

    $output = '<fieldset' . drupal_attributes($element['#attributes']) . '>';
    if (!empty($element['#title'])) {
        // Always wrap fieldset legends in a SPAN for CSS positioning.
        $output .= '<legend><span class="fieldset-legend">' . $element['#title'] . '</span></legend>';
    }
    // Add a wrapper if this fieldset is not collapsible.
    // theme_fieldset() in D7 adds a wrapper to all fieldsets, however in D6 this
    // wrapper is added by Drupal.behaviors.collapse(), but only to collapsible
    // fieldsets. So to ensure the wrapper is consistantly added here we add the
    // wrapper to the markup, but only for non collapsible fieldsets.
    if (empty($element['#collapsible'])) {
        $output .= '<div class="fieldset-wrapper">';
    }
    if (!empty($element['#description'])) {
        $output .= '<div class="description">' . $element['#description'] . '</div>';
    }
    if (isset($element['#children'])) {
        $output .= $element['#children'];
    }
    if (isset($element['#value'])) {
        $output .= $element['#value'];
    }
    if (empty($element['#collapsible'])) {
        $output .= '</div>';
    }
    $output .= "</fieldset>\n";
    return $output;
}

function seven_menu_item_link($link) {
    $categories = get_gallery_categories_links();
    $options = $link['localized_options'];
    foreach ($categories as $category) {
        if (isset($link['link_path'])) {
            if ((strpos($link['link_path'], $category) !== false) && (strpos($_GET['q'], $category) !== false)) {
                if (isset($options['attributes']['class'])) {
                    $options['attributes']['class'] .= ' active';
                } else {
                    $options['attributes']['class'] = 'active';
                }
            }
        }
    }
    return l($link['title'], $link['href'], $options);
}
