export type State = {
    selectedId: number;
    messages: Record<number, string>; // Хранит черновики сообщений для каждого контакта
};

export type Action = {
    type: 'changed_selection';
    contactId: number;
} | {
    type: 'edited_message';
    message: string;
} | {
    type: 'sent_message';
};

export const initialState = {
    selectedId: 0,
    messages: {
        0: 'Hello', // Начальное сообщение для первого контакта
    },
};

export function messengerReducer(
    state: State,
    action: Action
) {
    switch (action.type) {
            case 'changed_selection': {
                return {
                    ...state,
                    selectedId: action.contactId,
                };
            }
            case 'edited_message': {
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        [state.selectedId]: action.message,
                    },
                };
            }
            case 'sent_message': {
                return {
                  ...state,
                  messages: {
                      ...state.messages,
                      [state.selectedId]: '', // Очищаем сообщение после отправки
                  },
                };
              }
            default: {
                throw Error('Unknown action: ' + action.type);
            }
        }
    }
