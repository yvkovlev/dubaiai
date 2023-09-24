export enum Views {
  LANDING = 'landing',
  SIGN_IN = 'sign-in',
  PAYMENT = 'payment',
  PREDICTION_FLOW = 'prediction_flow',
  PREDICTION_RESULT = 'prediction-result'
}

export enum ErrorMessages {
  CASHFLOWS_FETCH_ERROR = 'Не удалось загрузить денежные потоки',
  CASHFLOWS_SAVE_ERROR = 'Не удалось добавить денежный поток',
  CASHFLOWS_DELETE_ERROR = 'Не удалось удалить денежный поток',
  CASHFLOWS_UPDATE_ERROR = 'Не удалось обновить денежный поток',
  CASHFLOWS_CATEGORY_VALIDATION_ERROR = 'Не введено название категории',
  CASHFLOWS_CATEGORY_LIMIT_ERROR = 'Название не может превышать 100 символов',
  CASHFLOWS_VALUE_LIMIT_ERROR = 'Сумма слишком велика',
  CASHFLOWS_VALUE_VALIDATION_ERROR = 'Не введено значение суммы',
  CASHFLOWS_VALUE_ZERO_ERROR = 'Сумма не может быть равной нулю',

  SPENDINGS_FETCH_ERROR = 'Не удалось загрузить дневные траты',
  SPENDINGS_SAVE_ERROR = 'Не удалось добавить дневные траты',
  SPENDINGS_DELETE_ERROR = 'Не удалось удалить дневные траты',
  SPENDINGS_UPDATE_ERROR = 'Не удалось обновить дневные траты',
  SPENDINGS_CATEGORY_VALIDATION_EMPTY_ERROR = 'Не выбрана категория',
  SPENDINGS_VALUE_VALIDATION_ERROR = 'Введено некорректное значение суммы',
  SPENDINGS_VALUE_LIMIT_ERROR = 'Сумма слишком велика',
  SPENDINGS_VALUE_ZERO_ERROR = 'Сумма не может быть равной нулю',

  SAVINGS_FETCH_ERROR = 'Не удалось загрузить сбережения',
  SAVINGS_SAVE_ERROR = 'Не удалось добавить сбережения',
  SAVINGS_UPDATE_ERROR = 'Не удалось обновить сбережения',
  SAVINGS_DELETE_ERROR = 'Не удалось удалить сбережения',

  SALDO_CHART_DATA_FETCH_ERROR = 'Не удалось загрузить динамику денежных остатков',
  SAVINGS_CHART_DATA_FETCH_ERROR = 'Не удалось загрузить динамику сбережений',

  GET_USER_INFO_ERROR = 'Не удалось загрузить данные пользователя',
  USER_EMAIL_PROVIDE_ERROR = 'Не удалось получить Email',

  FEEDBACK_SEND_ERROR = 'Не удалось отправить сообщение',
  FEEDBACK_MESSAGE_EMPTY_ERROR = 'Текст сообщения пуст',
  FEEDBACK_MESSAGE_LIMIT_ERROR = 'Сообщение не может превышать 1000 символов',

  TOOLTIPS_FETCH_ERROR = 'Не удалось загрузить онбординг',
  TOOLTIPS_SAVE_VIEW_ERROR = 'Не удалось сохранить просмотр тултипа',

  CATEGORIES_FETCH_ERROR = 'Не удалось загрузить список категорий трат',

  THROTTLE_LIMIT_ERROR = 'Превышен лимит запросов на сервер',

  CALL_TO_ACTIONS_FETCH_DISPLAYED_ACTIONS_ERROR = 'Не удалось получить показанные ранее Actions из Storage',
  CALL_TO_ACTIONS_SAVE_DISPLAYED_ACTIONS_ERROR = 'Не удалось сохранить показанный Action в Storage',
  CALL_TO_ACTIONS_FETCH_LAST_DISPLAY_DATE_ERROR = 'Не удалось получить последнюю дату показа Actions из Storage',
  CALL_TO_ACTIONS_SAVE_LAST_DISPLAY_DATE_ERROR = 'Не удалось сохранить дату показа Action в Storage',

  ACCOUNTS_NAME_LIMIT_ERROR = 'Название не может превышать 50 символов',
  ACCOUNTS_NAME_VALIDATION_ERROR = 'Введено некорректное значение имени',
  ACCOUNTS_NAME_VALIDATION_EMPTY_ERROR = 'Не введено название счёта',
  ACCOUNTS_TYPE_VALIDATION_ERROR = 'Не выбран тип счёта',
  ACCOUNTS_BALANCE_VALIDATION_ERROR = 'Введено некорректное значение баланса',
  ACCOUNTS_BALANCE_LIMIT_ERROR = 'Сумма слишком велика',
  ACCOUNTS_BALANCE_VALIDATION_EMPTY_ERROR = 'Не введен начальный баланс счёта',
  ACCOUNTS_CURRENCY_VALIDATION_ERROR = 'Не выбрана валюта счёта',
  ACCOUNTS_APPEARANCE_VALIDATION_ERROR = 'Не выбрано оформление счёта',
  ACCOUNTS_FETCH_ERROR = 'Не удалось загрузить счета',
  ACCOUNTS_SAVE_ERROR = 'Не удалось сохранить счёт',
  ACCOUNTS_UPDATE_ERROR = 'Не удалось обновить счёт',
  ACCOUNTS_DELETE_ERROR = 'Не удалось удалить счёт',

  CHART_ACCOUNT_BALANCE_DATA_FETCH_ERROR = 'Не удалось загрузить данные для графика Динамика баланса',
  CHART_ACCOUNT_CASH_FLOWS_DATA_FETCH_ERROR = 'Не удалось загрузить данные для графика Динамика поступлений и трат',
  CHART_ACCOUNT_OUTCOME_CATEGORIES_DATA_FETCH_ERROR = 'Не удалось загрузить данные для графика Доходы за месяц',
  CHART_ACCOUNT_INCOME_CATEGORIES_DATA_FETCH_ERROR = 'Не удалось загрузить данные для графика Расходы за месяц',

  TRANSACTION_VALUE_VALIDATION_ERROR = 'Введено некорректное значение суммы',
  TRANSACTION_VALUE_UPPER_LIMIT_ERROR = 'Сумма слишком велика',
  TRANSACTION_DATE_VALIDATION_ERROR = 'Введено некорректное значение даты',
  TRANSACTION_CATEGORY_VALIDATION_EMPTY_ERROR = 'Не выбрана категория транзакции',
  TRANSACTION_ACCOUNT_FROM_VALIDATION_EMPTY_ERROR = 'Не выбран счёт',
  TRANSACTION_ACCOUNT_TO_VALIDATION_EMPTY_ERROR = 'Не выбран счёт',
  TRANSACTION_ACCOUNT_TRANSFER_ERROR = 'Трансферы в рамках одного счёта недоступны',
  TRANSACTION_ACCOUNT_MULTYCURRENCY_ERROR = 'Трансферы между счетами в разных валютах недоступны',
  TRANSACTION_VALUE_VALIDATION_EMPTY_ERROR = 'Не введена сумма транзакции',
  TRANSACTION_VALUE_LOWER_LIMIT_ERROR = 'Сумма не может быть равной или меньше нуля',
  TRANSACTION_DATE_VALIDATION_EMPTY_ERROR = 'Не выбрана дата транзакции',
  TRANSACTIONS_FETCH_ERROR = 'Не удалось загрузить транзакции',
  TRANSACTION_CREATE_ERROR = 'Не удалось сохранить транзакцию',
  TRANSACTION_UPDATE_ERROR = 'Не удалось обновить транзакцию',
  TRANSACTION_DELETE_ERROR = 'Не удалось удалить транзакцию',
  TRANSACTION_CREATE_DATE_ERROR = 'Дата транзакции не может быть раньше, чем дата добавления счёта',

  SETTINGS_FETCH_ERROR = 'Не удалось загрузить настройки приложения',
  SETTINGS_SAVE_ERROR = 'Не удалось сохранить настройки приложения',

  MODULES_FETCH_ERROR = 'Не удалось получить информацию о подписках',

  DAILY_BALANCE_METHOD_FETCH_ERROR = 'Не удалось загрузить данные для дашборда',
  DAILY_BALANCE_METHOD_LINK_TRANSACTION_ERROR = 'Не удалось привязать транзакцию',
  DAILY_BALANCE_METHOD_UNLINK_TRANSACTION_ERROR = 'Не удалось отвязать транзакцию',
}

export enum SuccessMessages {
  SAVINGS_UPDATE_SUCCESS = 'Сбережения успешно обновлены',

  FEEDBACK_SEND_SUCCESS = 'Сообщение успешно отправлено',

  REMINDERS_ENABLED = 'Напоминания включены',
  NOTIFICATIONS_ENABLED = 'Уведомления включены',
  NOTIFICATIONS_DISABLED = 'Уведомления отключены',

  COMMUNITY_JOINED = 'Спасибо за подписку!',

  FAVORITES_ADDED = 'Приложение успешно добавлено в избранное',

  SETTINGS_UPDATE_SUCCESS = 'Настройки успешно изменены',

  MODULES_SUBSCRIPTION_INITIATION_SUCCESS = 'Подписка успешно оформлена!',
}

export enum WarningMessages {
  SAVINGS_MODIFY_WARNING = 'Размер сбережений автоматически уменьшен до %s',
  SUBSCRIPTION_STATUS_WAS_NOT_UPDATED_WARNING = 'Не удалось получить информацию о статусе подписки',
  MODULES_SUBSCRIPTION_INITIATION_ERROR = 'Подписка не была оформлена',
}

export enum TransactionConstants {
  AMOUNT_OF_DAYS_TO_FETCH = 5,
}
